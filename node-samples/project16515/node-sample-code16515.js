const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16515;
const EXT_SVCURL16465 = process.env.VCAP_URL16465 || 'https://somesv16465.example.com/getData';
const EXT_SVCURL21051 = process.env.VCAP_URL21051 || 'https://somesv21051.example.com/getData';
const EXT_SVCURL15071 = process.env.VCAP_URL15071 || 'https://somesv15071.example.com/getData';
const EXT_SVCURL13717 = process.env.VCAP_URL13717 || 'https://somesv13717.example.com/getData';
const EXT_SVCURL16948 = process.env.VCAP_URL16948 || 'https://somesv16948.example.com/getData';
const EXT_SVCURL28269 = process.env.VCAP_URL28269 || 'https://somesv28269.example.com/getData';
const EXT_SVCURL25919 = process.env.VCAP_URL25919 || 'https://somesv25919.example.com/getData';
const EXT_SVCURL4046 = process.env.VCAP_URL4046 || 'https://somesv4046.example.com/getData';
const EXT_SVCURL3697 = process.env.VCAP_URL3697 || 'https://somesv3697.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16515</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
