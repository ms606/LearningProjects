//var MongoClient = require('mongodb');


//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/mydb";
////
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  console.log("Database created!");
//  db.close();
//});




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://geoTagging:bits123@cluster0.fb8zv.mongodb.net/geoTagging ?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
