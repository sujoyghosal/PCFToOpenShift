const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 10704;
const EXT_SVCURL2910 = process.env.VCAP_URL2910 || 'https://somesv2910.example.com/getData';
const EXT_SVCURL2340 = process.env.VCAP_URL2340 || 'https://somesv2340.example.com/getData';
const EXT_SVCURL24615 = process.env.VCAP_URL24615 || 'https://somesv24615.example.com/getData';
const EXT_SVCURL4238 = process.env.VCAP_URL4238 || 'https://somesv4238.example.com/getData';
const EXT_SVCURL20000 = process.env.VCAP_URL20000 || 'https://somesv20000.example.com/getData';
const EXT_SVCURL16935 = process.env.VCAP_URL16935 || 'https://somesv16935.example.com/getData';
const EXT_SVCURL23468 = process.env.VCAP_URL23468 || 'https://somesv23468.example.com/getData';
const EXT_SVCURL9710 = process.env.VCAP_URL9710 || 'https://somesv9710.example.com/getData';
const EXT_SVCURL32484 = process.env.VCAP_URL32484 || 'https://somesv32484.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10704</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));