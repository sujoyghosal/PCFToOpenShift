const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33014;
const EXT_SVCURL20287 = process.env.VCAP_URL20287 || 'https://somesv20287.example.com/getData';
const EXT_SVCURL32968 = process.env.VCAP_URL32968 || 'https://somesv32968.example.com/getData';
const EXT_SVCURL8253 = process.env.VCAP_URL8253 || 'https://somesv8253.example.com/getData';
const EXT_SVCURL12955 = process.env.VCAP_URL12955 || 'https://somesv12955.example.com/getData';
const EXT_SVCURL12934 = process.env.VCAP_URL12934 || 'https://somesv12934.example.com/getData';
const EXT_SVCURL6380 = process.env.VCAP_URL6380 || 'https://somesv6380.example.com/getData';
const EXT_SVCURL17065 = process.env.VCAP_URL17065 || 'https://somesv17065.example.com/getData';
const EXT_SVCURL13144 = process.env.VCAP_URL13144 || 'https://somesv13144.example.com/getData';
const EXT_SVCURL27811 = process.env.VCAP_URL27811 || 'https://somesv27811.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33014</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));