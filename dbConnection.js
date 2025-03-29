const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnection(){
  try{
    await client.connect();
    console.log('db connection successfully')
    return client.db('Database1')
  }catch(error){
    console.log('db connection failed', error)
    return null
  }
}

module.exports = dbConnection;