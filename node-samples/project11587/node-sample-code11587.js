const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 11587;
const EXT_SVCURL9222 = process.env.VCAP_URL9222 || 'https://somesv9222.example.com/getData';
const EXT_SVCURL2294 = process.env.VCAP_URL2294 || 'https://somesv2294.example.com/getData';
const EXT_SVCURL14427 = process.env.VCAP_URL14427 || 'https://somesv14427.example.com/getData';
const EXT_SVCURL3354 = process.env.VCAP_URL3354 || 'https://somesv3354.example.com/getData';
const EXT_SVCURL25593 = process.env.VCAP_URL25593 || 'https://somesv25593.example.com/getData';
const EXT_SVCURL8685 = process.env.VCAP_URL8685 || 'https://somesv8685.example.com/getData';
const EXT_SVCURL32318 = process.env.VCAP_URL32318 || 'https://somesv32318.example.com/getData';
const EXT_SVCURL30623 = process.env.VCAP_URL30623 || 'https://somesv30623.example.com/getData';
const EXT_SVCURL30278 = process.env.VCAP_URL30278 || 'https://somesv30278.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #11587</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
