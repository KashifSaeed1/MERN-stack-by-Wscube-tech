const { MongoClient } = require('mongodb');

let dbConnectionUrl = 'mongodb://localhost:27017'; 
const client = new MongoClient(dbConnectionUrl);

let dbConnection = async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        let db = client.db('mongoDBProject_DataBase');
        return db;
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        throw error;
    }
};

module.exports = { dbConnection };
