//backend of filehosting project

//importing packages
const express=require('express');
const router=express.Router();
const auth = require('../middleware/auth');
const mongoose=require(`mongoose`);
const path=require(`path`);
const multer = require('multer');
const GridfsStorage =require('multer-gridfs-storage') ;
const Grid =require('gridfs-stream') ;
const methodOverride =require('method-override');



//connect database
const mongoURI=`mongodb+srv://db:db@cluster0.aaupd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` 
const connect=  mongoose.createConnection(mongoURI,{ useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true ,useFindAndModify:false});
console.log("file server connected");



//init gridfs
let gfs;

connect.once(`open`,()=>{
    gfs=Grid(connect.db,mongoose.mongo,{ useUnifiedTopology: true });
    gfs.collection(`uploads`);
})

//Create storage engine
const storage = new GridfsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
    }
  });

//multer upload
const upload=multer ({storage});



//@route POST /upload
//@desc upload files
router.post(`/upload`,upload.single('file'),(req,res)=>{
    res.send(`success`);
    
       
      });
      
    
//@route GET /files/filename
//desc get a file by filename
router.get('/files/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }
      // File exists
      console.log(file);
      return res.json(file);

    });
  });


// @route DELETE /files/:id
// @desc  Delete file by passing file id
router.delete('/files/:id', (req, res) => {
    gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridFSBucket) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
  
      res.send('deleted successfully')
    });
  });

//@route GET /files
//@desc get all files
router.get('/files',(req, res) => {
    gfs.files.find().toArray((err, files) => {
      // Check if files
      if (!files || files.length === 0) {
        return res.status(404).json({
          err: 'No files exist'
        });
      }
  
      // Files exist
      return res.json(files);
    });
  });


//@route GET /files/download/:filename
//download file from the database
router.get('/files/download/:filename', (req, res) => {
gfs.collection('uploads'); //set collection name to lookup into

    /** First check if file exists */
    gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // create read stream
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: 'uploads'
        });
        // set the proper content type 
        res.set('Content-Type', files[0].contentType)
        // Return response
        return readstream.pipe(res);
        console,log('test');
        
    });


});  
  

module.exports=router;


