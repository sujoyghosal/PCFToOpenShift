const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 19502;
const EXT_SVCURL10988 = process.env.VCAP_URL10988 || 'https://somesv10988.example.com/getData';
const EXT_SVCURL4450 = process.env.VCAP_URL4450 || 'https://somesv4450.example.com/getData';
const EXT_SVCURL12660 = process.env.VCAP_URL12660 || 'https://somesv12660.example.com/getData';
const EXT_SVCURL2926 = process.env.VCAP_URL2926 || 'https://somesv2926.example.com/getData';
const EXT_SVCURL16271 = process.env.VCAP_URL16271 || 'https://somesv16271.example.com/getData';
const EXT_SVCURL14489 = process.env.VCAP_URL14489 || 'https://somesv14489.example.com/getData';
const EXT_SVCURL13109 = process.env.VCAP_URL13109 || 'https://somesv13109.example.com/getData';
const EXT_SVCURL12889 = process.env.VCAP_URL12889 || 'https://somesv12889.example.com/getData';
const EXT_SVCURL13549 = process.env.VCAP_URL13549 || 'https://somesv13549.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #19502</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
