const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32524;
const EXT_SVCURL24263 = process.env.VCAP_URL24263 || 'https://somesv24263.example.com/getData';
const EXT_SVCURL17213 = process.env.VCAP_URL17213 || 'https://somesv17213.example.com/getData';
const EXT_SVCURL16139 = process.env.VCAP_URL16139 || 'https://somesv16139.example.com/getData';
const EXT_SVCURL34131 = process.env.VCAP_URL34131 || 'https://somesv34131.example.com/getData';
const EXT_SVCURL22211 = process.env.VCAP_URL22211 || 'https://somesv22211.example.com/getData';
const EXT_SVCURL32623 = process.env.VCAP_URL32623 || 'https://somesv32623.example.com/getData';
const EXT_SVCURL17988 = process.env.VCAP_URL17988 || 'https://somesv17988.example.com/getData';
const EXT_SVCURL3255 = process.env.VCAP_URL3255 || 'https://somesv3255.example.com/getData';
const EXT_SVCURL5648 = process.env.VCAP_URL5648 || 'https://somesv5648.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32524</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));