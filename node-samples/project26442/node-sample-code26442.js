const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26442;
const EXT_SVCURL32425 = process.env.VCAP_URL32425 || 'https://somesv32425.example.com/getData';
const EXT_SVCURL5302 = process.env.VCAP_URL5302 || 'https://somesv5302.example.com/getData';
const EXT_SVCURL13441 = process.env.VCAP_URL13441 || 'https://somesv13441.example.com/getData';
const EXT_SVCURL4731 = process.env.VCAP_URL4731 || 'https://somesv4731.example.com/getData';
const EXT_SVCURL11467 = process.env.VCAP_URL11467 || 'https://somesv11467.example.com/getData';
const EXT_SVCURL34689 = process.env.VCAP_URL34689 || 'https://somesv34689.example.com/getData';
const EXT_SVCURL25404 = process.env.VCAP_URL25404 || 'https://somesv25404.example.com/getData';
const EXT_SVCURL25618 = process.env.VCAP_URL25618 || 'https://somesv25618.example.com/getData';
const EXT_SVCURL9050 = process.env.VCAP_URL9050 || 'https://somesv9050.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26442</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));