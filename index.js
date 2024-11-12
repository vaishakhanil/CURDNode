/**
 * NAME: VAISHAKH ANIL KUMAR
 * C#: C0877469
 */

// Using strict and importing dotenv
"use strict"
require('dotenv').config();

// Importing express, body-parser and path modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Importing functions to connect and close the database
const {connectDB, closeDatabase} = require('./utils/db');

// Importing contents for the 404 page
const {notFoundContent} = require('./content');

const app = express();

// Setting the port
const PORT = process.env.PORT || 3000;

// Serving static file containing client Javascript and CSS
app.use(express.static(path.join(__dirname, 'static')));

// Setting the render engine to Pug
app.set('view engine', 'pug')

// using Express JSON, bodyparser middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

// Requiring the api routes
app.use(require('./routes'));

// if the criteria doesnt match any of the above routes, redirect to 404 page
app.use((req,res) => {
    res.status(404).render('404', notFoundContent);
})

// Closing the database when exiting
process.on('SIGINT', async() => await closeDatabase());

// listening to Port 3000 or PORT in prod env & connecting to MongoDB Atlas
app.listen(PORT, () => {
    connectDB().catch();
    console.log('connected');
});