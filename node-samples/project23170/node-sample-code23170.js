const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23170;
const EXT_SVCURL7714 = process.env.VCAP_URL7714 || 'https://somesv7714.example.com/getData';
const EXT_SVCURL10548 = process.env.VCAP_URL10548 || 'https://somesv10548.example.com/getData';
const EXT_SVCURL5887 = process.env.VCAP_URL5887 || 'https://somesv5887.example.com/getData';
const EXT_SVCURL12803 = process.env.VCAP_URL12803 || 'https://somesv12803.example.com/getData';
const EXT_SVCURL30089 = process.env.VCAP_URL30089 || 'https://somesv30089.example.com/getData';
const EXT_SVCURL29184 = process.env.VCAP_URL29184 || 'https://somesv29184.example.com/getData';
const EXT_SVCURL22446 = process.env.VCAP_URL22446 || 'https://somesv22446.example.com/getData';
const EXT_SVCURL4777 = process.env.VCAP_URL4777 || 'https://somesv4777.example.com/getData';
const EXT_SVCURL32869 = process.env.VCAP_URL32869 || 'https://somesv32869.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23170</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));