const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8280;
const EXT_SVCURL32058 = process.env.VCAP_URL32058 || 'https://somesv32058.example.com/getData';
const EXT_SVCURL9672 = process.env.VCAP_URL9672 || 'https://somesv9672.example.com/getData';
const EXT_SVCURL30309 = process.env.VCAP_URL30309 || 'https://somesv30309.example.com/getData';
const EXT_SVCURL30240 = process.env.VCAP_URL30240 || 'https://somesv30240.example.com/getData';
const EXT_SVCURL21230 = process.env.VCAP_URL21230 || 'https://somesv21230.example.com/getData';
const EXT_SVCURL2525 = process.env.VCAP_URL2525 || 'https://somesv2525.example.com/getData';
const EXT_SVCURL34564 = process.env.VCAP_URL34564 || 'https://somesv34564.example.com/getData';
const EXT_SVCURL8454 = process.env.VCAP_URL8454 || 'https://somesv8454.example.com/getData';
const EXT_SVCURL16976 = process.env.VCAP_URL16976 || 'https://somesv16976.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8280</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
