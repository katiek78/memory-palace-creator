const { MongoClient } = require("mongodb");
const Db = process.env.NODE_ENV === "production" ? process.env.MONGODB_URI : process.env.ATLAS_URI;
if (!Db) {
  throw new Error("Environment variable not set up");
}

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
// let cachedDb = {};

module.exports = {
  connectToServer: async () => {
    //  if (_db) return;
    try {
        const db = await client.connect();
        // cachedDb.isConnected = db.connections[0].readyState;
        _db = client.db("memory-palaces");
        console.log("DB connection successful!");
        //return cachedDb;

        // if (db)
        // {                
        //     //_db = db.db("palaces");
        //     _db = db;
        //     console.log("Successfully connected to MongoDB.");
        // } else {
        //     throw new Error("No DB");
        // }
    } catch (error) {
        console.error('Failed to connect to MongoDB server');
        throw new Error("Failed to connect");
    }
},
 
  getDb: function () {
    return _db;
  },
};


// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'myproject';

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   // Perform database operations here...

//   client.close();
// });