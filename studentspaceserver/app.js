const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors=require('cors');
const methodOverride =require('method-override');

// Load config
dotenv.config({ path: './config/.env' })
const app = express()


// Database Connection Method
connectDB();




app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors());
app.use(methodOverride('_method'));

// Routers
app.use('/users',require('./routes/UserRouter'));
app.use(`/library`,require(`./routes/libraryRoutes`));
app.use(`/community`,require(`./routes/postsRoutes`));
app.use(`/profile`,require('./routes/profileRoutes'));
app.use(`/events`,require('./routes/eventsRoutes'));

// Port Number
const PORT = process.env.PORT 

app.listen(
  PORT,
  console.log(`Server running in development mode on port ${PORT}`)
)
