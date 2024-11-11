/**
 * NAME: VAISHAKH ANIL KUMAR
 * C#: C0877469
 */

// IMPORTING PACKAGES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// TODO MOVE TO .ENV LATER
const PORT = 3000;
const URL = "localhost";
const mongo_url = "mongodb+srv://c0877469:AdNNVa5dIt595ZnL@assignment.zhl1o.mongodb.net/?retryWrites=true&w=majority&appName=assignment";

app.set('view engine', 'pug')
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('./routes'));

// MongoDB server API versions, from mongodb atlas documentation
const clientOptions = {
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true
    }
};

// Connecting to MongoDB Database
const connectDB = async () => {
    try {
        await mongoose.connect(mongo_url, clientOptions);
        await mongoose.connection.db.admin().command({ping: 1});
        console.log("Pinged!");
    } catch(error) {
        console.log("Error connecting to MongoDB Atlas: " + error);
    }
}

app.listen(PORT, URL, () => {
    connectDB().catch();
    console.log('connected');
});