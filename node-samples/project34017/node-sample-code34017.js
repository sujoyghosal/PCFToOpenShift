const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34017;
const EXT_SVCURL13241 = process.env.VCAP_URL13241 || 'https://somesv13241.example.com/getData';
const EXT_SVCURL34317 = process.env.VCAP_URL34317 || 'https://somesv34317.example.com/getData';
const EXT_SVCURL32706 = process.env.VCAP_URL32706 || 'https://somesv32706.example.com/getData';
const EXT_SVCURL9115 = process.env.VCAP_URL9115 || 'https://somesv9115.example.com/getData';
const EXT_SVCURL33436 = process.env.VCAP_URL33436 || 'https://somesv33436.example.com/getData';
const EXT_SVCURL24115 = process.env.VCAP_URL24115 || 'https://somesv24115.example.com/getData';
const EXT_SVCURL25951 = process.env.VCAP_URL25951 || 'https://somesv25951.example.com/getData';
const EXT_SVCURL31282 = process.env.VCAP_URL31282 || 'https://somesv31282.example.com/getData';
const EXT_SVCURL34311 = process.env.VCAP_URL34311 || 'https://somesv34311.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34017</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));