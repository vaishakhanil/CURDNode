/**
 * NAME: VAISHAKH ANIL KUMAR
 * C#: C0877469
 */

// IMPORTING PACKAGES
"use strict"
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const {connectDB, closeDatabase} = require('./utils/db');
const {notFoundContent} = require('./content');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'pug')
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('./routes'));

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