const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 29313;
const EXT_SVCURL15149 = process.env.VCAP_URL15149 || 'https://somesv15149.example.com/getData';
const EXT_SVCURL25284 = process.env.VCAP_URL25284 || 'https://somesv25284.example.com/getData';
const EXT_SVCURL17641 = process.env.VCAP_URL17641 || 'https://somesv17641.example.com/getData';
const EXT_SVCURL15873 = process.env.VCAP_URL15873 || 'https://somesv15873.example.com/getData';
const EXT_SVCURL34528 = process.env.VCAP_URL34528 || 'https://somesv34528.example.com/getData';
const EXT_SVCURL25305 = process.env.VCAP_URL25305 || 'https://somesv25305.example.com/getData';
const EXT_SVCURL5994 = process.env.VCAP_URL5994 || 'https://somesv5994.example.com/getData';
const EXT_SVCURL20250 = process.env.VCAP_URL20250 || 'https://somesv20250.example.com/getData';
const EXT_SVCURL13252 = process.env.VCAP_URL13252 || 'https://somesv13252.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #29313</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));