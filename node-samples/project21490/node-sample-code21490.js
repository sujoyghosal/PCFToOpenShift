const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21490;
const EXT_SVCURL2635 = process.env.VCAP_URL2635 || 'https://somesv2635.example.com/getData';
const EXT_SVCURL32627 = process.env.VCAP_URL32627 || 'https://somesv32627.example.com/getData';
const EXT_SVCURL20001 = process.env.VCAP_URL20001 || 'https://somesv20001.example.com/getData';
const EXT_SVCURL15935 = process.env.VCAP_URL15935 || 'https://somesv15935.example.com/getData';
const EXT_SVCURL27550 = process.env.VCAP_URL27550 || 'https://somesv27550.example.com/getData';
const EXT_SVCURL13328 = process.env.VCAP_URL13328 || 'https://somesv13328.example.com/getData';
const EXT_SVCURL6712 = process.env.VCAP_URL6712 || 'https://somesv6712.example.com/getData';
const EXT_SVCURL27622 = process.env.VCAP_URL27622 || 'https://somesv27622.example.com/getData';
const EXT_SVCURL28565 = process.env.VCAP_URL28565 || 'https://somesv28565.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21490</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
