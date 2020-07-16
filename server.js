const home = require("./routes/home");
const quotes = require("./routes/quotes");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const port = 3003;

app.use("/quotes", quotes); //uses imported router from quotes const on /quotes endpoint
app.use("/", home); //uses imported router from homes const on / endpoint

const connectionString =
  "mongodb+srv://admin:admin@cluster0-mtnrw.mongodb.net/<dbname>?retryWrites=true&w=majority";

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

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
