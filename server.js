const express = require('express')
const path = require('path')
const dayjs = require('dayjs')
const dotenv = require('dotenv').config()
const index = require('./routes')
const app = express()
const mongoose = require('./_connection.js') 

app.set('view engine','ejs')

//serve static assets
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/',index)

//custom 404
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname,'public/404.html'));
});

//port .env or 3000
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})