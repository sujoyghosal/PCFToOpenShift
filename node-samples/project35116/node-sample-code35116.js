const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35116;
const EXT_SVCURL8217 = process.env.VCAP_URL8217 || 'https://somesv8217.example.com/getData';
const EXT_SVCURL32488 = process.env.VCAP_URL32488 || 'https://somesv32488.example.com/getData';
const EXT_SVCURL13440 = process.env.VCAP_URL13440 || 'https://somesv13440.example.com/getData';
const EXT_SVCURL25511 = process.env.VCAP_URL25511 || 'https://somesv25511.example.com/getData';
const EXT_SVCURL16612 = process.env.VCAP_URL16612 || 'https://somesv16612.example.com/getData';
const EXT_SVCURL27285 = process.env.VCAP_URL27285 || 'https://somesv27285.example.com/getData';
const EXT_SVCURL23076 = process.env.VCAP_URL23076 || 'https://somesv23076.example.com/getData';
const EXT_SVCURL24009 = process.env.VCAP_URL24009 || 'https://somesv24009.example.com/getData';
const EXT_SVCURL18652 = process.env.VCAP_URL18652 || 'https://somesv18652.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35116</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));