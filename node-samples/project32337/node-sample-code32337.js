const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32337;
const EXT_SVCURL23212 = process.env.VCAP_URL23212 || 'https://somesv23212.example.com/getData';
const EXT_SVCURL8304 = process.env.VCAP_URL8304 || 'https://somesv8304.example.com/getData';
const EXT_SVCURL33105 = process.env.VCAP_URL33105 || 'https://somesv33105.example.com/getData';
const EXT_SVCURL8465 = process.env.VCAP_URL8465 || 'https://somesv8465.example.com/getData';
const EXT_SVCURL10671 = process.env.VCAP_URL10671 || 'https://somesv10671.example.com/getData';
const EXT_SVCURL25279 = process.env.VCAP_URL25279 || 'https://somesv25279.example.com/getData';
const EXT_SVCURL16841 = process.env.VCAP_URL16841 || 'https://somesv16841.example.com/getData';
const EXT_SVCURL26261 = process.env.VCAP_URL26261 || 'https://somesv26261.example.com/getData';
const EXT_SVCURL19592 = process.env.VCAP_URL19592 || 'https://somesv19592.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32337</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));