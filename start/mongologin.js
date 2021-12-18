const { MongoClient } = require('mongodb');
require('dotenv').config()

const urlDB = `mongodb+srv://babydazo:${process.env.dbpass}@musicbot.czyfu.mongodb.net/${process.env.dbname}?retryWrites=true&w=majority`;
const clientDB = new MongoClient(urlDB, { useNewUrlParser: true, useUnifiedTopology: true });

clientDB.connect()

const collectionMusic = clientDB.db("Music").collection("musicbot");

const collectionConfig = collectionMusic;

module.exports = { collectionMusic, collectionConfig }

console.log("MongoDB Logged");