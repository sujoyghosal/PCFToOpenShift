const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 11333;
const EXT_SVCURL17639 = process.env.VCAP_URL17639 || 'https://somesv17639.example.com/getData';
const EXT_SVCURL13561 = process.env.VCAP_URL13561 || 'https://somesv13561.example.com/getData';
const EXT_SVCURL21940 = process.env.VCAP_URL21940 || 'https://somesv21940.example.com/getData';
const EXT_SVCURL13366 = process.env.VCAP_URL13366 || 'https://somesv13366.example.com/getData';
const EXT_SVCURL19762 = process.env.VCAP_URL19762 || 'https://somesv19762.example.com/getData';
const EXT_SVCURL2456 = process.env.VCAP_URL2456 || 'https://somesv2456.example.com/getData';
const EXT_SVCURL33795 = process.env.VCAP_URL33795 || 'https://somesv33795.example.com/getData';
const EXT_SVCURL4553 = process.env.VCAP_URL4553 || 'https://somesv4553.example.com/getData';
const EXT_SVCURL25501 = process.env.VCAP_URL25501 || 'https://somesv25501.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #11333</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));