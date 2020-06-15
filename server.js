var express = require("express");
var app = express();
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://admin:admin@cluster0-mtnrw.mongodb.net/<dbname>?retryWrites=true&w=majority";

// Added by Max

MongoClient.connect(
  connectionString,
  {
    useUnifiedTopology: true,
  },
  (err, client) => {
    // ... do something here
    if (err) return console.error(err);
    const db = client.db("test-db");
    const testConnection = db.collection("test");

    testConnection
      .insertOne({
        name: "name",
        value: "one",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  }
);

app.get("/", function (req, res) {
  res.send("Hello World");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
