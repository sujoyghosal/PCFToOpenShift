const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 10532;
const EXT_SVCURL27194 = process.env.VCAP_URL27194 || 'https://somesv27194.example.com/getData';
const EXT_SVCURL9817 = process.env.VCAP_URL9817 || 'https://somesv9817.example.com/getData';
const EXT_SVCURL18155 = process.env.VCAP_URL18155 || 'https://somesv18155.example.com/getData';
const EXT_SVCURL11371 = process.env.VCAP_URL11371 || 'https://somesv11371.example.com/getData';
const EXT_SVCURL16381 = process.env.VCAP_URL16381 || 'https://somesv16381.example.com/getData';
const EXT_SVCURL6796 = process.env.VCAP_URL6796 || 'https://somesv6796.example.com/getData';
const EXT_SVCURL7798 = process.env.VCAP_URL7798 || 'https://somesv7798.example.com/getData';
const EXT_SVCURL20142 = process.env.VCAP_URL20142 || 'https://somesv20142.example.com/getData';
const EXT_SVCURL2499 = process.env.VCAP_URL2499 || 'https://somesv2499.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10532</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));