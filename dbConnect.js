require('dotenv').config()
//MongoDB connection
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://Jasjot:1234@cluster0.wo82l5i.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err,db) => {
    if(!err){
        console.log('MongoDB Conencted')
    }
    else {
        console.log("DB Error: ",err);
        process.exit(1);
    }
})

module.MongoClient = client;