const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
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
//Pour travailler en localhost
app.use(cors());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
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

