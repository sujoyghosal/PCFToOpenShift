const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5532;
const EXT_SVCURL25748 = process.env.VCAP_URL25748 || 'https://somesv25748.example.com/getData';
const EXT_SVCURL13926 = process.env.VCAP_URL13926 || 'https://somesv13926.example.com/getData';
const EXT_SVCURL8297 = process.env.VCAP_URL8297 || 'https://somesv8297.example.com/getData';
const EXT_SVCURL20748 = process.env.VCAP_URL20748 || 'https://somesv20748.example.com/getData';
const EXT_SVCURL20050 = process.env.VCAP_URL20050 || 'https://somesv20050.example.com/getData';
const EXT_SVCURL28021 = process.env.VCAP_URL28021 || 'https://somesv28021.example.com/getData';
const EXT_SVCURL17981 = process.env.VCAP_URL17981 || 'https://somesv17981.example.com/getData';
const EXT_SVCURL32598 = process.env.VCAP_URL32598 || 'https://somesv32598.example.com/getData';
const EXT_SVCURL33496 = process.env.VCAP_URL33496 || 'https://somesv33496.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5532</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));