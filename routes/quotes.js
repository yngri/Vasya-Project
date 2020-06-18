const express = require('express');
const router = express.Router();

router.post("/", function (req, res) {
    var requestObjectReceivedByServer = req.body;
    console.log("received a quote object that looks as follows:\n");
    console.log(req.body);
});

module.exports = router;