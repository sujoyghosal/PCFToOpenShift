const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24184;
const EXT_SVCURL20725 = process.env.VCAP_URL20725 || 'https://somesv20725.example.com/getData';
const EXT_SVCURL6352 = process.env.VCAP_URL6352 || 'https://somesv6352.example.com/getData';
const EXT_SVCURL32853 = process.env.VCAP_URL32853 || 'https://somesv32853.example.com/getData';
const EXT_SVCURL13360 = process.env.VCAP_URL13360 || 'https://somesv13360.example.com/getData';
const EXT_SVCURL23371 = process.env.VCAP_URL23371 || 'https://somesv23371.example.com/getData';
const EXT_SVCURL11676 = process.env.VCAP_URL11676 || 'https://somesv11676.example.com/getData';
const EXT_SVCURL21222 = process.env.VCAP_URL21222 || 'https://somesv21222.example.com/getData';
const EXT_SVCURL19602 = process.env.VCAP_URL19602 || 'https://somesv19602.example.com/getData';
const EXT_SVCURL33212 = process.env.VCAP_URL33212 || 'https://somesv33212.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24184</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
