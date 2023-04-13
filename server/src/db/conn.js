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
            throw new Error("No DB");
        }
    } catch (error) {
        console.error('Failed to connect to MongoDB server');
        throw new Error("Failed to connect");
    }
},
 
  getDb: function () {
    return _db;
  },
};
