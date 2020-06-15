var express = require("express");
const bodyParser = require("body-parser");
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
    testConnection = db.collection("test");
    //console.log(testConnection);
  }
);

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //res.send("Hello World");
  res.sendFile(__dirname + "/test.html");
});

app.post("/quotes", function (req, res) {
  var requestObjectReceivedByServer = req.body;
  console.log("received a quote object that looks as follows:\n");
  console.log(req.body);

  console.log("testCOnnection: " + testConnection);
  //   testConnection
  //     .insertOne({
  //       name: requestObjectReceivedByServer.name,
  //       value: requestObjectReceivedByServer.quote,
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => console.error(error));

  res.redirect("/");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
