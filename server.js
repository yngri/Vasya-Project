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




app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);

MongoClient.connect(
    connectionString, {
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

//comment from Alex