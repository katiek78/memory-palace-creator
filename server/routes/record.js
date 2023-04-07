const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/journey").get(async function (req, res) {      
 let db_connect = dbo.getDb("memory-palaces");
    try {
        const journeys = await db_connect
        .collection("palaces")
        .find({})
        .toArray();        
        res.json(journeys);
    } catch (e) {
        console.log("An error occurred pulling the records. " + e);
    }
});
 
// This section will help you get a single record by id
recordRoutes.route("/journey/:id").get(async function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = {_id: new ObjectId(req.params.id)};  
 try {
    const result = await db_connect
    .collection("palaces")
    .findOne(myquery);        
    res.json(result);
} catch (e) {
    console.log("An error occurred pulling the records. " + e);
}
});
 
// This section will help you create a new record.
recordRoutes.route("/journey/add").post(async function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   name: req.body.name 
 };
 try {
    const res = await db_connect.collection("palaces").insertOne(myobj);
    console.log(res);
    response.json(res);
    } catch (e) {
    console.log("An error occurred when adding a record. " + e);
 }});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(async function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: new ObjectId(req.params.id) };
 let newvalues = {
   $set: {
     name: req.body.name,    
   },
 };
 try {
    const res = await db_connect
   .collection("palaces")
   .updateOne(myquery, newvalues);     
    console.log("1 document updated");
    response.json(res);
   } catch {
    console.log("An error occurred when updating a record. " + e);
   }
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete(async (req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: new ObjectId(req.params.id) };
 try {
 const obj = await db_connect.collection("palaces").deleteOne(myquery); 
   console.log("1 document deleted");
   response.json(obj);
 } catch {
    console.log("An error occurred when deleting a record. " + e);
 }
});

// This section will help you create a new point.
recordRoutes.route("/point/add/:id").post(async function (req, response) {
    let db_connect = dbo.getDb();    
    let myquery = { _id: new ObjectId(req.params.id) };
    let myobj = {
      _id : new ObjectId(),
      name: req.body.name,
      location: req.body.location
    };
    try {    
       const res = await db_connect.collection("palaces").updateOne(myquery, {$push: {points: myobj}});           
       response.json(res);
       } catch (e) {
       console.log("An error occurred when adding a journey point. " + e);
    }});
    
// This section will help you delete a point
recordRoutes.route("/delete/:journeyId/:id").delete(async (req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.journeyId) };
    try {
        const obj = await db_connect.collection("palaces").updateOne(myquery, {$pull: {points: {_id: {$eq: new ObjectId(req.params.id)}}}}); 
    //   console.log("1 document deleted");
    //   response.json(obj);
    } catch (e) {
       console.log("An error occurred when deleting a record. " + e);
    }
   });

module.exports = recordRoutes;
