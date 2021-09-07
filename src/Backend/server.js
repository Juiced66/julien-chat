const express = require('express');
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

//Init dotenv
dotenv.config();
//init DB
InitiateMongoServer();
//init express
const app = express()
//Init PORT
const PORT = process.env.PORT || 5000;

//Anciennement Body-parser
app.use(express.urlencoded({ extended: true }));
//Work with JSON
app.use(express.json());



app.get("/", (req, res) => {
    res.json({ message: "API Working" });
  });

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
  });

