const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser')
const connectDB = require("./config/db.js")
const studentRoutes = require('./routes/studentRoutes.js')

const app = express()

app.use(cors())
app.use(bodyParser.json())

connectDB();

// Routes
app.use('/api/students', studentRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
})