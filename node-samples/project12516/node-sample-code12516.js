const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12516;
const EXT_SVCURL6091 = process.env.VCAP_URL6091 || 'https://somesv6091.example.com/getData';
const EXT_SVCURL28597 = process.env.VCAP_URL28597 || 'https://somesv28597.example.com/getData';
const EXT_SVCURL6393 = process.env.VCAP_URL6393 || 'https://somesv6393.example.com/getData';
const EXT_SVCURL24312 = process.env.VCAP_URL24312 || 'https://somesv24312.example.com/getData';
const EXT_SVCURL19460 = process.env.VCAP_URL19460 || 'https://somesv19460.example.com/getData';
const EXT_SVCURL13684 = process.env.VCAP_URL13684 || 'https://somesv13684.example.com/getData';
const EXT_SVCURL19513 = process.env.VCAP_URL19513 || 'https://somesv19513.example.com/getData';
const EXT_SVCURL9097 = process.env.VCAP_URL9097 || 'https://somesv9097.example.com/getData';
const EXT_SVCURL8205 = process.env.VCAP_URL8205 || 'https://somesv8205.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12516</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));