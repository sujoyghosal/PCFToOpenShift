const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6014;
const EXT_SVCURL13954 = process.env.VCAP_URL13954 || 'https://somesv13954.example.com/getData';
const EXT_SVCURL19938 = process.env.VCAP_URL19938 || 'https://somesv19938.example.com/getData';
const EXT_SVCURL19859 = process.env.VCAP_URL19859 || 'https://somesv19859.example.com/getData';
const EXT_SVCURL20124 = process.env.VCAP_URL20124 || 'https://somesv20124.example.com/getData';
const EXT_SVCURL3126 = process.env.VCAP_URL3126 || 'https://somesv3126.example.com/getData';
const EXT_SVCURL6134 = process.env.VCAP_URL6134 || 'https://somesv6134.example.com/getData';
const EXT_SVCURL15949 = process.env.VCAP_URL15949 || 'https://somesv15949.example.com/getData';
const EXT_SVCURL8281 = process.env.VCAP_URL8281 || 'https://somesv8281.example.com/getData';
const EXT_SVCURL16972 = process.env.VCAP_URL16972 || 'https://somesv16972.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6014</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));