const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27909;
const EXT_SVCURL13265 = process.env.VCAP_URL13265 || 'https://somesv13265.example.com/getData';
const EXT_SVCURL23318 = process.env.VCAP_URL23318 || 'https://somesv23318.example.com/getData';
const EXT_SVCURL10841 = process.env.VCAP_URL10841 || 'https://somesv10841.example.com/getData';
const EXT_SVCURL17910 = process.env.VCAP_URL17910 || 'https://somesv17910.example.com/getData';
const EXT_SVCURL19152 = process.env.VCAP_URL19152 || 'https://somesv19152.example.com/getData';
const EXT_SVCURL27018 = process.env.VCAP_URL27018 || 'https://somesv27018.example.com/getData';
const EXT_SVCURL6051 = process.env.VCAP_URL6051 || 'https://somesv6051.example.com/getData';
const EXT_SVCURL8340 = process.env.VCAP_URL8340 || 'https://somesv8340.example.com/getData';
const EXT_SVCURL33247 = process.env.VCAP_URL33247 || 'https://somesv33247.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27909</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
