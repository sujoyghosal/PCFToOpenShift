const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8018;
const EXT_SVCURL2613 = process.env.VCAP_URL2613 || 'https://somesv2613.example.com/getData';
const EXT_SVCURL12491 = process.env.VCAP_URL12491 || 'https://somesv12491.example.com/getData';
const EXT_SVCURL9109 = process.env.VCAP_URL9109 || 'https://somesv9109.example.com/getData';
const EXT_SVCURL14381 = process.env.VCAP_URL14381 || 'https://somesv14381.example.com/getData';
const EXT_SVCURL26933 = process.env.VCAP_URL26933 || 'https://somesv26933.example.com/getData';
const EXT_SVCURL29643 = process.env.VCAP_URL29643 || 'https://somesv29643.example.com/getData';
const EXT_SVCURL9288 = process.env.VCAP_URL9288 || 'https://somesv9288.example.com/getData';
const EXT_SVCURL11801 = process.env.VCAP_URL11801 || 'https://somesv11801.example.com/getData';
const EXT_SVCURL26769 = process.env.VCAP_URL26769 || 'https://somesv26769.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8018</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
