const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23893;
const EXT_SVCURL4066 = process.env.VCAP_URL4066 || 'https://somesv4066.example.com/getData';
const EXT_SVCURL28109 = process.env.VCAP_URL28109 || 'https://somesv28109.example.com/getData';
const EXT_SVCURL5135 = process.env.VCAP_URL5135 || 'https://somesv5135.example.com/getData';
const EXT_SVCURL3106 = process.env.VCAP_URL3106 || 'https://somesv3106.example.com/getData';
const EXT_SVCURL19329 = process.env.VCAP_URL19329 || 'https://somesv19329.example.com/getData';
const EXT_SVCURL28242 = process.env.VCAP_URL28242 || 'https://somesv28242.example.com/getData';
const EXT_SVCURL11539 = process.env.VCAP_URL11539 || 'https://somesv11539.example.com/getData';
const EXT_SVCURL23774 = process.env.VCAP_URL23774 || 'https://somesv23774.example.com/getData';
const EXT_SVCURL32204 = process.env.VCAP_URL32204 || 'https://somesv32204.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23893</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
