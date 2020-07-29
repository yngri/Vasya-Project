const express = require("express");
const router = express.Router();

router.post("/quotes", function (req, res) {
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

module.exports = router;
