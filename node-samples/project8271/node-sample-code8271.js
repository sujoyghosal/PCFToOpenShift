const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8271;
const EXT_SVCURL18750 = process.env.VCAP_URL18750 || 'https://somesv18750.example.com/getData';
const EXT_SVCURL29127 = process.env.VCAP_URL29127 || 'https://somesv29127.example.com/getData';
const EXT_SVCURL11508 = process.env.VCAP_URL11508 || 'https://somesv11508.example.com/getData';
const EXT_SVCURL30646 = process.env.VCAP_URL30646 || 'https://somesv30646.example.com/getData';
const EXT_SVCURL20370 = process.env.VCAP_URL20370 || 'https://somesv20370.example.com/getData';
const EXT_SVCURL12052 = process.env.VCAP_URL12052 || 'https://somesv12052.example.com/getData';
const EXT_SVCURL17979 = process.env.VCAP_URL17979 || 'https://somesv17979.example.com/getData';
const EXT_SVCURL14343 = process.env.VCAP_URL14343 || 'https://somesv14343.example.com/getData';
const EXT_SVCURL26519 = process.env.VCAP_URL26519 || 'https://somesv26519.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8271</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));