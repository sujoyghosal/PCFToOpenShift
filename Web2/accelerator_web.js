var express = require("express");
var app = express();
var path = require("path");
//var https = require("https");
var http = require("http");
const fs = require("fs");
const bodyParser = require("body-parser");
var helmet = require("helmet");
app.use(helmet());
app.use(express.static("www"));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var key = fs.readFileSync("selfsigned.key");
var cert = fs.readFileSync("selfsigned.crt");
var options = {
  key: key,
  cert: cert,
};
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/www/Login.html"));
  //__dirname : It will resolve to your project folder.
});

var PORT = process.env.PORT || 3000;
http.createServer(options, app).listen(PORT, function (req, res) {
  console.log("Server started at port " + PORT);
});
