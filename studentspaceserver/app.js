const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './config/.env' })
const app = express()

// Database Connection Method
connectDB();

app.get('/',function (req,res) {
  res.send("Hello World");
})

// Port Number
const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server running in development mode on port ${PORT}`)
)
