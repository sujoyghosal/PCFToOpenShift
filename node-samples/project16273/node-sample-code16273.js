const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16273;
const EXT_SVCURL32247 = process.env.VCAP_URL32247 || 'https://somesv32247.example.com/getData';
const EXT_SVCURL30780 = process.env.VCAP_URL30780 || 'https://somesv30780.example.com/getData';
const EXT_SVCURL24490 = process.env.VCAP_URL24490 || 'https://somesv24490.example.com/getData';
const EXT_SVCURL9073 = process.env.VCAP_URL9073 || 'https://somesv9073.example.com/getData';
const EXT_SVCURL20089 = process.env.VCAP_URL20089 || 'https://somesv20089.example.com/getData';
const EXT_SVCURL7802 = process.env.VCAP_URL7802 || 'https://somesv7802.example.com/getData';
const EXT_SVCURL3872 = process.env.VCAP_URL3872 || 'https://somesv3872.example.com/getData';
const EXT_SVCURL5498 = process.env.VCAP_URL5498 || 'https://somesv5498.example.com/getData';
const EXT_SVCURL25333 = process.env.VCAP_URL25333 || 'https://somesv25333.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16273</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
