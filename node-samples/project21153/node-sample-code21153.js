const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21153;
const EXT_SVCURL4881 = process.env.VCAP_URL4881 || 'https://somesv4881.example.com/getData';
const EXT_SVCURL28282 = process.env.VCAP_URL28282 || 'https://somesv28282.example.com/getData';
const EXT_SVCURL7040 = process.env.VCAP_URL7040 || 'https://somesv7040.example.com/getData';
const EXT_SVCURL26298 = process.env.VCAP_URL26298 || 'https://somesv26298.example.com/getData';
const EXT_SVCURL26321 = process.env.VCAP_URL26321 || 'https://somesv26321.example.com/getData';
const EXT_SVCURL18531 = process.env.VCAP_URL18531 || 'https://somesv18531.example.com/getData';
const EXT_SVCURL4282 = process.env.VCAP_URL4282 || 'https://somesv4282.example.com/getData';
const EXT_SVCURL27054 = process.env.VCAP_URL27054 || 'https://somesv27054.example.com/getData';
const EXT_SVCURL21177 = process.env.VCAP_URL21177 || 'https://somesv21177.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21153</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));