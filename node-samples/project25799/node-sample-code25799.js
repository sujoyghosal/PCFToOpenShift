const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25799;
const EXT_SVCURL2330 = process.env.VCAP_URL2330 || 'https://somesv2330.example.com/getData';
const EXT_SVCURL5543 = process.env.VCAP_URL5543 || 'https://somesv5543.example.com/getData';
const EXT_SVCURL2675 = process.env.VCAP_URL2675 || 'https://somesv2675.example.com/getData';
const EXT_SVCURL10172 = process.env.VCAP_URL10172 || 'https://somesv10172.example.com/getData';
const EXT_SVCURL15836 = process.env.VCAP_URL15836 || 'https://somesv15836.example.com/getData';
const EXT_SVCURL15872 = process.env.VCAP_URL15872 || 'https://somesv15872.example.com/getData';
const EXT_SVCURL34350 = process.env.VCAP_URL34350 || 'https://somesv34350.example.com/getData';
const EXT_SVCURL11280 = process.env.VCAP_URL11280 || 'https://somesv11280.example.com/getData';
const EXT_SVCURL16741 = process.env.VCAP_URL16741 || 'https://somesv16741.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25799</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
