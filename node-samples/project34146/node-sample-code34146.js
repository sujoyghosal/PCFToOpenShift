const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34146;
const EXT_SVCURL5204 = process.env.VCAP_URL5204 || 'https://somesv5204.example.com/getData';
const EXT_SVCURL26239 = process.env.VCAP_URL26239 || 'https://somesv26239.example.com/getData';
const EXT_SVCURL24811 = process.env.VCAP_URL24811 || 'https://somesv24811.example.com/getData';
const EXT_SVCURL31141 = process.env.VCAP_URL31141 || 'https://somesv31141.example.com/getData';
const EXT_SVCURL7463 = process.env.VCAP_URL7463 || 'https://somesv7463.example.com/getData';
const EXT_SVCURL33303 = process.env.VCAP_URL33303 || 'https://somesv33303.example.com/getData';
const EXT_SVCURL21259 = process.env.VCAP_URL21259 || 'https://somesv21259.example.com/getData';
const EXT_SVCURL12603 = process.env.VCAP_URL12603 || 'https://somesv12603.example.com/getData';
const EXT_SVCURL24181 = process.env.VCAP_URL24181 || 'https://somesv24181.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34146</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));