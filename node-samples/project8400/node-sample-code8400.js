const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8400;
const EXT_SVCURL24265 = process.env.VCAP_URL24265 || 'https://somesv24265.example.com/getData';
const EXT_SVCURL27178 = process.env.VCAP_URL27178 || 'https://somesv27178.example.com/getData';
const EXT_SVCURL15320 = process.env.VCAP_URL15320 || 'https://somesv15320.example.com/getData';
const EXT_SVCURL13619 = process.env.VCAP_URL13619 || 'https://somesv13619.example.com/getData';
const EXT_SVCURL19528 = process.env.VCAP_URL19528 || 'https://somesv19528.example.com/getData';
const EXT_SVCURL12780 = process.env.VCAP_URL12780 || 'https://somesv12780.example.com/getData';
const EXT_SVCURL13192 = process.env.VCAP_URL13192 || 'https://somesv13192.example.com/getData';
const EXT_SVCURL19384 = process.env.VCAP_URL19384 || 'https://somesv19384.example.com/getData';
const EXT_SVCURL5646 = process.env.VCAP_URL5646 || 'https://somesv5646.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8400</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
