const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27489;
const EXT_SVCURL29896 = process.env.VCAP_URL29896 || 'https://somesv29896.example.com/getData';
const EXT_SVCURL17200 = process.env.VCAP_URL17200 || 'https://somesv17200.example.com/getData';
const EXT_SVCURL5270 = process.env.VCAP_URL5270 || 'https://somesv5270.example.com/getData';
const EXT_SVCURL21503 = process.env.VCAP_URL21503 || 'https://somesv21503.example.com/getData';
const EXT_SVCURL21143 = process.env.VCAP_URL21143 || 'https://somesv21143.example.com/getData';
const EXT_SVCURL16282 = process.env.VCAP_URL16282 || 'https://somesv16282.example.com/getData';
const EXT_SVCURL25782 = process.env.VCAP_URL25782 || 'https://somesv25782.example.com/getData';
const EXT_SVCURL23137 = process.env.VCAP_URL23137 || 'https://somesv23137.example.com/getData';
const EXT_SVCURL21087 = process.env.VCAP_URL21087 || 'https://somesv21087.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27489</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));