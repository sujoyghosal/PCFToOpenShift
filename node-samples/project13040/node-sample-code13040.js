const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 13040;
const EXT_SVCURL7672 = process.env.VCAP_URL7672 || 'https://somesv7672.example.com/getData';
const EXT_SVCURL17892 = process.env.VCAP_URL17892 || 'https://somesv17892.example.com/getData';
const EXT_SVCURL26062 = process.env.VCAP_URL26062 || 'https://somesv26062.example.com/getData';
const EXT_SVCURL20223 = process.env.VCAP_URL20223 || 'https://somesv20223.example.com/getData';
const EXT_SVCURL31010 = process.env.VCAP_URL31010 || 'https://somesv31010.example.com/getData';
const EXT_SVCURL8068 = process.env.VCAP_URL8068 || 'https://somesv8068.example.com/getData';
const EXT_SVCURL29198 = process.env.VCAP_URL29198 || 'https://somesv29198.example.com/getData';
const EXT_SVCURL24702 = process.env.VCAP_URL24702 || 'https://somesv24702.example.com/getData';
const EXT_SVCURL13312 = process.env.VCAP_URL13312 || 'https://somesv13312.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13040</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));