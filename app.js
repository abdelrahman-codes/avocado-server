require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 8000;
const connection = require('./src/config/db');
const cors = require('cors');

connection();
const app = express()

app.use(express.json());
app.use(cors())



app.listen(port, function () {
    console.log(`Express server listening on port ${port} and worker ${process.pid}`)
  })
