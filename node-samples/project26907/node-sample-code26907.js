const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26907;
const EXT_SVCURL9035 = process.env.VCAP_URL9035 || 'https://somesv9035.example.com/getData';
const EXT_SVCURL16489 = process.env.VCAP_URL16489 || 'https://somesv16489.example.com/getData';
const EXT_SVCURL32563 = process.env.VCAP_URL32563 || 'https://somesv32563.example.com/getData';
const EXT_SVCURL15335 = process.env.VCAP_URL15335 || 'https://somesv15335.example.com/getData';
const EXT_SVCURL19643 = process.env.VCAP_URL19643 || 'https://somesv19643.example.com/getData';
const EXT_SVCURL29011 = process.env.VCAP_URL29011 || 'https://somesv29011.example.com/getData';
const EXT_SVCURL21657 = process.env.VCAP_URL21657 || 'https://somesv21657.example.com/getData';
const EXT_SVCURL33404 = process.env.VCAP_URL33404 || 'https://somesv33404.example.com/getData';
const EXT_SVCURL19298 = process.env.VCAP_URL19298 || 'https://somesv19298.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26907</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
