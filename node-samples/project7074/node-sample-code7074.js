const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7074;
const EXT_SVCURL4609 = process.env.VCAP_URL4609 || 'https://somesv4609.example.com/getData';
const EXT_SVCURL16355 = process.env.VCAP_URL16355 || 'https://somesv16355.example.com/getData';
const EXT_SVCURL20108 = process.env.VCAP_URL20108 || 'https://somesv20108.example.com/getData';
const EXT_SVCURL2840 = process.env.VCAP_URL2840 || 'https://somesv2840.example.com/getData';
const EXT_SVCURL28135 = process.env.VCAP_URL28135 || 'https://somesv28135.example.com/getData';
const EXT_SVCURL12439 = process.env.VCAP_URL12439 || 'https://somesv12439.example.com/getData';
const EXT_SVCURL32011 = process.env.VCAP_URL32011 || 'https://somesv32011.example.com/getData';
const EXT_SVCURL30412 = process.env.VCAP_URL30412 || 'https://somesv30412.example.com/getData';
const EXT_SVCURL13280 = process.env.VCAP_URL13280 || 'https://somesv13280.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7074</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
