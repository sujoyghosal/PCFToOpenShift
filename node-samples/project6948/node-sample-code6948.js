const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6948;
const EXT_SVCURL26973 = process.env.VCAP_URL26973 || 'https://somesv26973.example.com/getData';
const EXT_SVCURL31614 = process.env.VCAP_URL31614 || 'https://somesv31614.example.com/getData';
const EXT_SVCURL33375 = process.env.VCAP_URL33375 || 'https://somesv33375.example.com/getData';
const EXT_SVCURL5662 = process.env.VCAP_URL5662 || 'https://somesv5662.example.com/getData';
const EXT_SVCURL27469 = process.env.VCAP_URL27469 || 'https://somesv27469.example.com/getData';
const EXT_SVCURL6960 = process.env.VCAP_URL6960 || 'https://somesv6960.example.com/getData';
const EXT_SVCURL10327 = process.env.VCAP_URL10327 || 'https://somesv10327.example.com/getData';
const EXT_SVCURL13298 = process.env.VCAP_URL13298 || 'https://somesv13298.example.com/getData';
const EXT_SVCURL33678 = process.env.VCAP_URL33678 || 'https://somesv33678.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6948</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));