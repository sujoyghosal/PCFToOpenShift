const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26967;
const EXT_SVCURL34239 = process.env.VCAP_URL34239 || 'https://somesv34239.example.com/getData';
const EXT_SVCURL21646 = process.env.VCAP_URL21646 || 'https://somesv21646.example.com/getData';
const EXT_SVCURL28192 = process.env.VCAP_URL28192 || 'https://somesv28192.example.com/getData';
const EXT_SVCURL27933 = process.env.VCAP_URL27933 || 'https://somesv27933.example.com/getData';
const EXT_SVCURL11380 = process.env.VCAP_URL11380 || 'https://somesv11380.example.com/getData';
const EXT_SVCURL12725 = process.env.VCAP_URL12725 || 'https://somesv12725.example.com/getData';
const EXT_SVCURL29310 = process.env.VCAP_URL29310 || 'https://somesv29310.example.com/getData';
const EXT_SVCURL10753 = process.env.VCAP_URL10753 || 'https://somesv10753.example.com/getData';
const EXT_SVCURL23198 = process.env.VCAP_URL23198 || 'https://somesv23198.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26967</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));