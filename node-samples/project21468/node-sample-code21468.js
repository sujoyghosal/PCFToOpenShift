const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21468;
const EXT_SVCURL25340 = process.env.VCAP_URL25340 || 'https://somesv25340.example.com/getData';
const EXT_SVCURL32653 = process.env.VCAP_URL32653 || 'https://somesv32653.example.com/getData';
const EXT_SVCURL16018 = process.env.VCAP_URL16018 || 'https://somesv16018.example.com/getData';
const EXT_SVCURL22243 = process.env.VCAP_URL22243 || 'https://somesv22243.example.com/getData';
const EXT_SVCURL3436 = process.env.VCAP_URL3436 || 'https://somesv3436.example.com/getData';
const EXT_SVCURL17294 = process.env.VCAP_URL17294 || 'https://somesv17294.example.com/getData';
const EXT_SVCURL13251 = process.env.VCAP_URL13251 || 'https://somesv13251.example.com/getData';
const EXT_SVCURL25998 = process.env.VCAP_URL25998 || 'https://somesv25998.example.com/getData';
const EXT_SVCURL30416 = process.env.VCAP_URL30416 || 'https://somesv30416.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21468</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
