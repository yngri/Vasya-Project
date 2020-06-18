const home = require('./routes/home');
const quotes = require('./routes.quotes');
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/quotes', quotes);
app.use('/', home);



const connectionString =
  "mongodb+srv://admin:admin@cluster0-mtnrw.mongodb.net/<dbname>?retryWrites=true&w=majority";

//  Make sure you place body-parser before your CRUD handlers!
<<<<<<< HEAD



=======
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  //res.send("Hello World");
  res.sendFile(__dirname + "/test.html");
});
>>>>>>> 21f3a5aa8d4b7e32c27935d3b21cd8f910b37b4c

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

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

<<<<<<< HEAD
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
//});
=======
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
});
>>>>>>> 21f3a5aa8d4b7e32c27935d3b21cd8f910b37b4c

<<<<<<< HEAD
//123
//Comment from max
=======
//comment from Alex
>>>>>>> 07bde7ff8aeb8b13ef12e2c468a6f03c9be47c86
