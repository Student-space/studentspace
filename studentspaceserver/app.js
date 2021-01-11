const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/db')
const multer = require('multer');
const cors=require('cors');
const bodyParser=require(`body-parser`);
const methodOverride =require('method-override');

// Load config
dotenv.config({ path: './config/.env' })
const app = express()


// Database Connection Method
connectDB();

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Routers
app.use('/users',require('./routes/UserRouter'));
app.use(`/library`,require(`./routes/libraryRoutes`));

// Port Number
const PORT = process.env.PORT 

app.listen(
  PORT,
  console.log(`Server running in development mode on port ${PORT}`)
)
