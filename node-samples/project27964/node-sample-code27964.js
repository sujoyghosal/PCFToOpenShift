const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27964;
const EXT_SVCURL22690 = process.env.VCAP_URL22690 || 'https://somesv22690.example.com/getData';
const EXT_SVCURL4107 = process.env.VCAP_URL4107 || 'https://somesv4107.example.com/getData';
const EXT_SVCURL30288 = process.env.VCAP_URL30288 || 'https://somesv30288.example.com/getData';
const EXT_SVCURL16316 = process.env.VCAP_URL16316 || 'https://somesv16316.example.com/getData';
const EXT_SVCURL21799 = process.env.VCAP_URL21799 || 'https://somesv21799.example.com/getData';
const EXT_SVCURL16656 = process.env.VCAP_URL16656 || 'https://somesv16656.example.com/getData';
const EXT_SVCURL21308 = process.env.VCAP_URL21308 || 'https://somesv21308.example.com/getData';
const EXT_SVCURL11216 = process.env.VCAP_URL11216 || 'https://somesv11216.example.com/getData';
const EXT_SVCURL7313 = process.env.VCAP_URL7313 || 'https://somesv7313.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27964</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
