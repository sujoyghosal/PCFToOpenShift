const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 30397;
const EXT_SVCURL8994 = process.env.VCAP_URL8994 || 'https://somesv8994.example.com/getData';
const EXT_SVCURL27548 = process.env.VCAP_URL27548 || 'https://somesv27548.example.com/getData';
const EXT_SVCURL2607 = process.env.VCAP_URL2607 || 'https://somesv2607.example.com/getData';
const EXT_SVCURL32239 = process.env.VCAP_URL32239 || 'https://somesv32239.example.com/getData';
const EXT_SVCURL33116 = process.env.VCAP_URL33116 || 'https://somesv33116.example.com/getData';
const EXT_SVCURL13108 = process.env.VCAP_URL13108 || 'https://somesv13108.example.com/getData';
const EXT_SVCURL2171 = process.env.VCAP_URL2171 || 'https://somesv2171.example.com/getData';
const EXT_SVCURL11815 = process.env.VCAP_URL11815 || 'https://somesv11815.example.com/getData';
const EXT_SVCURL32771 = process.env.VCAP_URL32771 || 'https://somesv32771.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #30397</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));