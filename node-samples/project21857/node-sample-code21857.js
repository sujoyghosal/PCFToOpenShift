const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21857;
const EXT_SVCURL10247 = process.env.VCAP_URL10247 || 'https://somesv10247.example.com/getData';
const EXT_SVCURL2353 = process.env.VCAP_URL2353 || 'https://somesv2353.example.com/getData';
const EXT_SVCURL18988 = process.env.VCAP_URL18988 || 'https://somesv18988.example.com/getData';
const EXT_SVCURL17595 = process.env.VCAP_URL17595 || 'https://somesv17595.example.com/getData';
const EXT_SVCURL16117 = process.env.VCAP_URL16117 || 'https://somesv16117.example.com/getData';
const EXT_SVCURL22785 = process.env.VCAP_URL22785 || 'https://somesv22785.example.com/getData';
const EXT_SVCURL6872 = process.env.VCAP_URL6872 || 'https://somesv6872.example.com/getData';
const EXT_SVCURL13520 = process.env.VCAP_URL13520 || 'https://somesv13520.example.com/getData';
const EXT_SVCURL2173 = process.env.VCAP_URL2173 || 'https://somesv2173.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21857</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
