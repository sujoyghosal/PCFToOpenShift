const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24401;
const EXT_SVCURL19733 = process.env.VCAP_URL19733 || 'https://somesv19733.example.com/getData';
const EXT_SVCURL2489 = process.env.VCAP_URL2489 || 'https://somesv2489.example.com/getData';
const EXT_SVCURL4253 = process.env.VCAP_URL4253 || 'https://somesv4253.example.com/getData';
const EXT_SVCURL23102 = process.env.VCAP_URL23102 || 'https://somesv23102.example.com/getData';
const EXT_SVCURL22379 = process.env.VCAP_URL22379 || 'https://somesv22379.example.com/getData';
const EXT_SVCURL5975 = process.env.VCAP_URL5975 || 'https://somesv5975.example.com/getData';
const EXT_SVCURL21607 = process.env.VCAP_URL21607 || 'https://somesv21607.example.com/getData';
const EXT_SVCURL9836 = process.env.VCAP_URL9836 || 'https://somesv9836.example.com/getData';
const EXT_SVCURL17667 = process.env.VCAP_URL17667 || 'https://somesv17667.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24401</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));