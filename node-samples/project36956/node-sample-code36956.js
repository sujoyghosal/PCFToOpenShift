const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 36956;
const EXT_SVCURL17899 = process.env.VCAP_URL17899 || 'https://somesv17899.example.com/getData';
const EXT_SVCURL6376 = process.env.VCAP_URL6376 || 'https://somesv6376.example.com/getData';
const EXT_SVCURL19283 = process.env.VCAP_URL19283 || 'https://somesv19283.example.com/getData';
const EXT_SVCURL7243 = process.env.VCAP_URL7243 || 'https://somesv7243.example.com/getData';
const EXT_SVCURL34165 = process.env.VCAP_URL34165 || 'https://somesv34165.example.com/getData';
const EXT_SVCURL21742 = process.env.VCAP_URL21742 || 'https://somesv21742.example.com/getData';
const EXT_SVCURL11914 = process.env.VCAP_URL11914 || 'https://somesv11914.example.com/getData';
const EXT_SVCURL21277 = process.env.VCAP_URL21277 || 'https://somesv21277.example.com/getData';
const EXT_SVCURL29066 = process.env.VCAP_URL29066 || 'https://somesv29066.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36956</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));