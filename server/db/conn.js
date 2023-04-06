const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: async () => {
    try {
        await client.connect();
        const db = client.db("memory-palaces");

        if (db)
        {                
            //_db = db.db("palaces");
            _db = db;
            console.log("Successfully connected to MongoDB.");
        } else {
            console.log("Don't know when it might get here")
        }
    } catch (error) {
        console.error('Failed to connect to MongoDB server');
        throw error;
    }
},
 
  getDb: function () {
    return _db;
  },
};
