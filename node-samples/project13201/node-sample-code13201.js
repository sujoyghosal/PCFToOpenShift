const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 13201;
const EXT_SVCURL26279 = process.env.VCAP_URL26279 || 'https://somesv26279.example.com/getData';
const EXT_SVCURL26522 = process.env.VCAP_URL26522 || 'https://somesv26522.example.com/getData';
const EXT_SVCURL29416 = process.env.VCAP_URL29416 || 'https://somesv29416.example.com/getData';
const EXT_SVCURL17369 = process.env.VCAP_URL17369 || 'https://somesv17369.example.com/getData';
const EXT_SVCURL10698 = process.env.VCAP_URL10698 || 'https://somesv10698.example.com/getData';
const EXT_SVCURL12867 = process.env.VCAP_URL12867 || 'https://somesv12867.example.com/getData';
const EXT_SVCURL19961 = process.env.VCAP_URL19961 || 'https://somesv19961.example.com/getData';
const EXT_SVCURL16354 = process.env.VCAP_URL16354 || 'https://somesv16354.example.com/getData';
const EXT_SVCURL32534 = process.env.VCAP_URL32534 || 'https://somesv32534.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13201</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));