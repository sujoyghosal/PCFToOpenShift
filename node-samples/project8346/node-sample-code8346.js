const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8346;
const EXT_SVCURL13399 = process.env.VCAP_URL13399 || 'https://somesv13399.example.com/getData';
const EXT_SVCURL26507 = process.env.VCAP_URL26507 || 'https://somesv26507.example.com/getData';
const EXT_SVCURL24647 = process.env.VCAP_URL24647 || 'https://somesv24647.example.com/getData';
const EXT_SVCURL32531 = process.env.VCAP_URL32531 || 'https://somesv32531.example.com/getData';
const EXT_SVCURL29542 = process.env.VCAP_URL29542 || 'https://somesv29542.example.com/getData';
const EXT_SVCURL5986 = process.env.VCAP_URL5986 || 'https://somesv5986.example.com/getData';
const EXT_SVCURL25738 = process.env.VCAP_URL25738 || 'https://somesv25738.example.com/getData';
const EXT_SVCURL27450 = process.env.VCAP_URL27450 || 'https://somesv27450.example.com/getData';
const EXT_SVCURL4319 = process.env.VCAP_URL4319 || 'https://somesv4319.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8346</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));