const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26761;
const EXT_SVCURL26732 = process.env.VCAP_URL26732 || 'https://somesv26732.example.com/getData';
const EXT_SVCURL5254 = process.env.VCAP_URL5254 || 'https://somesv5254.example.com/getData';
const EXT_SVCURL2283 = process.env.VCAP_URL2283 || 'https://somesv2283.example.com/getData';
const EXT_SVCURL23589 = process.env.VCAP_URL23589 || 'https://somesv23589.example.com/getData';
const EXT_SVCURL11188 = process.env.VCAP_URL11188 || 'https://somesv11188.example.com/getData';
const EXT_SVCURL33189 = process.env.VCAP_URL33189 || 'https://somesv33189.example.com/getData';
const EXT_SVCURL20751 = process.env.VCAP_URL20751 || 'https://somesv20751.example.com/getData';
const EXT_SVCURL34320 = process.env.VCAP_URL34320 || 'https://somesv34320.example.com/getData';
const EXT_SVCURL32380 = process.env.VCAP_URL32380 || 'https://somesv32380.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26761</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));