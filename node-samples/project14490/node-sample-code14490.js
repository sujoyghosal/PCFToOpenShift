const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14490;
const EXT_SVCURL9007 = process.env.VCAP_URL9007 || 'https://somesv9007.example.com/getData';
const EXT_SVCURL10474 = process.env.VCAP_URL10474 || 'https://somesv10474.example.com/getData';
const EXT_SVCURL29066 = process.env.VCAP_URL29066 || 'https://somesv29066.example.com/getData';
const EXT_SVCURL21273 = process.env.VCAP_URL21273 || 'https://somesv21273.example.com/getData';
const EXT_SVCURL26172 = process.env.VCAP_URL26172 || 'https://somesv26172.example.com/getData';
const EXT_SVCURL10513 = process.env.VCAP_URL10513 || 'https://somesv10513.example.com/getData';
const EXT_SVCURL5137 = process.env.VCAP_URL5137 || 'https://somesv5137.example.com/getData';
const EXT_SVCURL23181 = process.env.VCAP_URL23181 || 'https://somesv23181.example.com/getData';
const EXT_SVCURL22150 = process.env.VCAP_URL22150 || 'https://somesv22150.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14490</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));