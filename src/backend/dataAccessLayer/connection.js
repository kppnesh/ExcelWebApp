const { MongoClient } = require('mongodb');

exports.dbconnect = async () => {

    const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";


    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        return await client.connect();

    } catch (e) {
        console.error(e);
    } 
}