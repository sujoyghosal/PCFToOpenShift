const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23897;
const EXT_SVCURL8289 = process.env.VCAP_URL8289 || 'https://somesv8289.example.com/getData';
const EXT_SVCURL31489 = process.env.VCAP_URL31489 || 'https://somesv31489.example.com/getData';
const EXT_SVCURL26641 = process.env.VCAP_URL26641 || 'https://somesv26641.example.com/getData';
const EXT_SVCURL19039 = process.env.VCAP_URL19039 || 'https://somesv19039.example.com/getData';
const EXT_SVCURL29566 = process.env.VCAP_URL29566 || 'https://somesv29566.example.com/getData';
const EXT_SVCURL29519 = process.env.VCAP_URL29519 || 'https://somesv29519.example.com/getData';
const EXT_SVCURL8665 = process.env.VCAP_URL8665 || 'https://somesv8665.example.com/getData';
const EXT_SVCURL13564 = process.env.VCAP_URL13564 || 'https://somesv13564.example.com/getData';
const EXT_SVCURL30478 = process.env.VCAP_URL30478 || 'https://somesv30478.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23897</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));