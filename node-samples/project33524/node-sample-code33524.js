const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33524;
const EXT_SVCURL10270 = process.env.VCAP_URL10270 || 'https://somesv10270.example.com/getData';
const EXT_SVCURL26251 = process.env.VCAP_URL26251 || 'https://somesv26251.example.com/getData';
const EXT_SVCURL33743 = process.env.VCAP_URL33743 || 'https://somesv33743.example.com/getData';
const EXT_SVCURL34402 = process.env.VCAP_URL34402 || 'https://somesv34402.example.com/getData';
const EXT_SVCURL26608 = process.env.VCAP_URL26608 || 'https://somesv26608.example.com/getData';
const EXT_SVCURL23167 = process.env.VCAP_URL23167 || 'https://somesv23167.example.com/getData';
const EXT_SVCURL6932 = process.env.VCAP_URL6932 || 'https://somesv6932.example.com/getData';
const EXT_SVCURL13368 = process.env.VCAP_URL13368 || 'https://somesv13368.example.com/getData';
const EXT_SVCURL29818 = process.env.VCAP_URL29818 || 'https://somesv29818.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33524</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
