const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24664;
const EXT_SVCURL10528 = process.env.VCAP_URL10528 || 'https://somesv10528.example.com/getData';
const EXT_SVCURL19275 = process.env.VCAP_URL19275 || 'https://somesv19275.example.com/getData';
const EXT_SVCURL18394 = process.env.VCAP_URL18394 || 'https://somesv18394.example.com/getData';
const EXT_SVCURL24928 = process.env.VCAP_URL24928 || 'https://somesv24928.example.com/getData';
const EXT_SVCURL15823 = process.env.VCAP_URL15823 || 'https://somesv15823.example.com/getData';
const EXT_SVCURL26260 = process.env.VCAP_URL26260 || 'https://somesv26260.example.com/getData';
const EXT_SVCURL19206 = process.env.VCAP_URL19206 || 'https://somesv19206.example.com/getData';
const EXT_SVCURL12390 = process.env.VCAP_URL12390 || 'https://somesv12390.example.com/getData';
const EXT_SVCURL13415 = process.env.VCAP_URL13415 || 'https://somesv13415.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24664</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
