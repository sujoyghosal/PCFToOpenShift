const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9957;
const EXT_SVCURL16037 = process.env.VCAP_URL16037 || 'https://somesv16037.example.com/getData';
const EXT_SVCURL13463 = process.env.VCAP_URL13463 || 'https://somesv13463.example.com/getData';
const EXT_SVCURL21988 = process.env.VCAP_URL21988 || 'https://somesv21988.example.com/getData';
const EXT_SVCURL33445 = process.env.VCAP_URL33445 || 'https://somesv33445.example.com/getData';
const EXT_SVCURL31631 = process.env.VCAP_URL31631 || 'https://somesv31631.example.com/getData';
const EXT_SVCURL17321 = process.env.VCAP_URL17321 || 'https://somesv17321.example.com/getData';
const EXT_SVCURL5752 = process.env.VCAP_URL5752 || 'https://somesv5752.example.com/getData';
const EXT_SVCURL10419 = process.env.VCAP_URL10419 || 'https://somesv10419.example.com/getData';
const EXT_SVCURL2600 = process.env.VCAP_URL2600 || 'https://somesv2600.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9957</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));