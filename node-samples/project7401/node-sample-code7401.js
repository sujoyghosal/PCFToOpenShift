const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7401;
const EXT_SVCURL25137 = process.env.VCAP_URL25137 || 'https://somesv25137.example.com/getData';
const EXT_SVCURL19833 = process.env.VCAP_URL19833 || 'https://somesv19833.example.com/getData';
const EXT_SVCURL7707 = process.env.VCAP_URL7707 || 'https://somesv7707.example.com/getData';
const EXT_SVCURL9394 = process.env.VCAP_URL9394 || 'https://somesv9394.example.com/getData';
const EXT_SVCURL2963 = process.env.VCAP_URL2963 || 'https://somesv2963.example.com/getData';
const EXT_SVCURL22101 = process.env.VCAP_URL22101 || 'https://somesv22101.example.com/getData';
const EXT_SVCURL3104 = process.env.VCAP_URL3104 || 'https://somesv3104.example.com/getData';
const EXT_SVCURL22730 = process.env.VCAP_URL22730 || 'https://somesv22730.example.com/getData';
const EXT_SVCURL7184 = process.env.VCAP_URL7184 || 'https://somesv7184.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7401</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));