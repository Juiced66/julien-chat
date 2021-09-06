const express = require('express');
const mongoose = require('mongoose')
const user = require('./models/user')

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost/users')

app.get('/',(req, res)=> {
    res.send('Hello World');
})

app.listen(5000);