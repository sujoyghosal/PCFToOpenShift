const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14224;
const EXT_SVCURL2617 = process.env.VCAP_URL2617 || 'https://somesv2617.example.com/getData';
const EXT_SVCURL5156 = process.env.VCAP_URL5156 || 'https://somesv5156.example.com/getData';
const EXT_SVCURL11907 = process.env.VCAP_URL11907 || 'https://somesv11907.example.com/getData';
const EXT_SVCURL16411 = process.env.VCAP_URL16411 || 'https://somesv16411.example.com/getData';
const EXT_SVCURL5449 = process.env.VCAP_URL5449 || 'https://somesv5449.example.com/getData';
const EXT_SVCURL14949 = process.env.VCAP_URL14949 || 'https://somesv14949.example.com/getData';
const EXT_SVCURL14692 = process.env.VCAP_URL14692 || 'https://somesv14692.example.com/getData';
const EXT_SVCURL29348 = process.env.VCAP_URL29348 || 'https://somesv29348.example.com/getData';
const EXT_SVCURL19258 = process.env.VCAP_URL19258 || 'https://somesv19258.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14224</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));