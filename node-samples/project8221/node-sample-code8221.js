const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8221;
const EXT_SVCURL7145 = process.env.VCAP_URL7145 || 'https://somesv7145.example.com/getData';
const EXT_SVCURL26555 = process.env.VCAP_URL26555 || 'https://somesv26555.example.com/getData';
const EXT_SVCURL5563 = process.env.VCAP_URL5563 || 'https://somesv5563.example.com/getData';
const EXT_SVCURL21829 = process.env.VCAP_URL21829 || 'https://somesv21829.example.com/getData';
const EXT_SVCURL21316 = process.env.VCAP_URL21316 || 'https://somesv21316.example.com/getData';
const EXT_SVCURL24972 = process.env.VCAP_URL24972 || 'https://somesv24972.example.com/getData';
const EXT_SVCURL11662 = process.env.VCAP_URL11662 || 'https://somesv11662.example.com/getData';
const EXT_SVCURL4142 = process.env.VCAP_URL4142 || 'https://somesv4142.example.com/getData';
const EXT_SVCURL19265 = process.env.VCAP_URL19265 || 'https://somesv19265.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8221</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));