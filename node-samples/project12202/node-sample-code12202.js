const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12202;
const EXT_SVCURL13959 = process.env.VCAP_URL13959 || 'https://somesv13959.example.com/getData';
const EXT_SVCURL6600 = process.env.VCAP_URL6600 || 'https://somesv6600.example.com/getData';
const EXT_SVCURL8493 = process.env.VCAP_URL8493 || 'https://somesv8493.example.com/getData';
const EXT_SVCURL31669 = process.env.VCAP_URL31669 || 'https://somesv31669.example.com/getData';
const EXT_SVCURL4098 = process.env.VCAP_URL4098 || 'https://somesv4098.example.com/getData';
const EXT_SVCURL21698 = process.env.VCAP_URL21698 || 'https://somesv21698.example.com/getData';
const EXT_SVCURL17673 = process.env.VCAP_URL17673 || 'https://somesv17673.example.com/getData';
const EXT_SVCURL9495 = process.env.VCAP_URL9495 || 'https://somesv9495.example.com/getData';
const EXT_SVCURL34279 = process.env.VCAP_URL34279 || 'https://somesv34279.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12202</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));