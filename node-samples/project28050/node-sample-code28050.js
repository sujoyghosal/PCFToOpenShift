const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28050;
const EXT_SVCURL30351 = process.env.VCAP_URL30351 || 'https://somesv30351.example.com/getData';
const EXT_SVCURL8036 = process.env.VCAP_URL8036 || 'https://somesv8036.example.com/getData';
const EXT_SVCURL6922 = process.env.VCAP_URL6922 || 'https://somesv6922.example.com/getData';
const EXT_SVCURL17020 = process.env.VCAP_URL17020 || 'https://somesv17020.example.com/getData';
const EXT_SVCURL31217 = process.env.VCAP_URL31217 || 'https://somesv31217.example.com/getData';
const EXT_SVCURL2700 = process.env.VCAP_URL2700 || 'https://somesv2700.example.com/getData';
const EXT_SVCURL5720 = process.env.VCAP_URL5720 || 'https://somesv5720.example.com/getData';
const EXT_SVCURL9831 = process.env.VCAP_URL9831 || 'https://somesv9831.example.com/getData';
const EXT_SVCURL32993 = process.env.VCAP_URL32993 || 'https://somesv32993.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28050</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));