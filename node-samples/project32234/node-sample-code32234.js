const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32234;
const EXT_SVCURL32459 = process.env.VCAP_URL32459 || 'https://somesv32459.example.com/getData';
const EXT_SVCURL17930 = process.env.VCAP_URL17930 || 'https://somesv17930.example.com/getData';
const EXT_SVCURL18188 = process.env.VCAP_URL18188 || 'https://somesv18188.example.com/getData';
const EXT_SVCURL9420 = process.env.VCAP_URL9420 || 'https://somesv9420.example.com/getData';
const EXT_SVCURL10921 = process.env.VCAP_URL10921 || 'https://somesv10921.example.com/getData';
const EXT_SVCURL3224 = process.env.VCAP_URL3224 || 'https://somesv3224.example.com/getData';
const EXT_SVCURL15130 = process.env.VCAP_URL15130 || 'https://somesv15130.example.com/getData';
const EXT_SVCURL17395 = process.env.VCAP_URL17395 || 'https://somesv17395.example.com/getData';
const EXT_SVCURL26823 = process.env.VCAP_URL26823 || 'https://somesv26823.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32234</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));