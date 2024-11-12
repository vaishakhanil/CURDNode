/**
 * NAME: VAISHAKH ANIL KUMAR
 * C#: C0877469
 */

// IMPORTING PACKAGES
"use strict"
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const {connectDB, closeDatabase} = require('./utils/db');

const app = express();

// TODO MOVE TO .ENV LATER
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'pug')
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('./routes'));

app.listen(PORT, () => {
    connectDB().catch();
    console.log('connected');
});