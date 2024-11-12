const mongoose = require('mongoose');

// MongoDB Connection String
const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@assignment.zhl1o.mongodb.net/?retryWrites=true&w=majority&appName=assignment`;

// MongoDB server API versions, from mongodb atlas documentation
const clientOptions = {
    serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true
    }
};

/**
 * To Initiate connection to Mongodb Atlas
 */
const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_URL, clientOptions);
        // Testing Connection - As per Mongodb documentation
        await mongoose.connection.db.admin().command({ping: 1});
        console.log("Pinged!");
    } catch(error) {
        console.log("Error connecting to MongoDB Atlas: " + error);
    }
}

/**
 * Closing MongoDB Connection with Mongodb Atlas
 */
const closeDatabase = async () => {
    try {
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
        process.exit(0);
    } catch(error) {
        console.log("Error closing MongoDB connection: " + error);
        process.exit(0);
    }
}

module.exports = {
    connectDB,
    closeDatabase
}
