const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33051;
const EXT_SVCURL8491 = process.env.VCAP_URL8491 || 'https://somesv8491.example.com/getData';
const EXT_SVCURL23394 = process.env.VCAP_URL23394 || 'https://somesv23394.example.com/getData';
const EXT_SVCURL32689 = process.env.VCAP_URL32689 || 'https://somesv32689.example.com/getData';
const EXT_SVCURL25252 = process.env.VCAP_URL25252 || 'https://somesv25252.example.com/getData';
const EXT_SVCURL15119 = process.env.VCAP_URL15119 || 'https://somesv15119.example.com/getData';
const EXT_SVCURL19247 = process.env.VCAP_URL19247 || 'https://somesv19247.example.com/getData';
const EXT_SVCURL11492 = process.env.VCAP_URL11492 || 'https://somesv11492.example.com/getData';
const EXT_SVCURL21166 = process.env.VCAP_URL21166 || 'https://somesv21166.example.com/getData';
const EXT_SVCURL7745 = process.env.VCAP_URL7745 || 'https://somesv7745.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33051</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));