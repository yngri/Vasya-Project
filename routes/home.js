const express = require('express');
const router = express.Router();

app.get("/", function (req, res) {
    //res.send("Hello World");
    res.sendFile(__dirname + "/test.html");
});

module.exports = router;