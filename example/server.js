const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app
  .use("/static", express.static(__dirname + "/static"))
  .get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
  })
  .listen(port, function() {
    console.log("Go to http://localhost:" + port + " in your browser.");
  });
