const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28173;
const EXT_SVCURL32082 = process.env.VCAP_URL32082 || 'https://somesv32082.example.com/getData';
const EXT_SVCURL33527 = process.env.VCAP_URL33527 || 'https://somesv33527.example.com/getData';
const EXT_SVCURL29345 = process.env.VCAP_URL29345 || 'https://somesv29345.example.com/getData';
const EXT_SVCURL8037 = process.env.VCAP_URL8037 || 'https://somesv8037.example.com/getData';
const EXT_SVCURL6492 = process.env.VCAP_URL6492 || 'https://somesv6492.example.com/getData';
const EXT_SVCURL21560 = process.env.VCAP_URL21560 || 'https://somesv21560.example.com/getData';
const EXT_SVCURL8781 = process.env.VCAP_URL8781 || 'https://somesv8781.example.com/getData';
const EXT_SVCURL19328 = process.env.VCAP_URL19328 || 'https://somesv19328.example.com/getData';
const EXT_SVCURL6068 = process.env.VCAP_URL6068 || 'https://somesv6068.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28173</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
