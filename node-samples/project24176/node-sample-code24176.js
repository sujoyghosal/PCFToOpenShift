const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24176;
const EXT_SVCURL33003 = process.env.VCAP_URL33003 || 'https://somesv33003.example.com/getData';
const EXT_SVCURL22107 = process.env.VCAP_URL22107 || 'https://somesv22107.example.com/getData';
const EXT_SVCURL5900 = process.env.VCAP_URL5900 || 'https://somesv5900.example.com/getData';
const EXT_SVCURL8660 = process.env.VCAP_URL8660 || 'https://somesv8660.example.com/getData';
const EXT_SVCURL11139 = process.env.VCAP_URL11139 || 'https://somesv11139.example.com/getData';
const EXT_SVCURL32059 = process.env.VCAP_URL32059 || 'https://somesv32059.example.com/getData';
const EXT_SVCURL32055 = process.env.VCAP_URL32055 || 'https://somesv32055.example.com/getData';
const EXT_SVCURL9222 = process.env.VCAP_URL9222 || 'https://somesv9222.example.com/getData';
const EXT_SVCURL26530 = process.env.VCAP_URL26530 || 'https://somesv26530.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24176</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
