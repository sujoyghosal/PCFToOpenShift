const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6997;
const EXT_SVCURL34200 = process.env.VCAP_URL34200 || 'https://somesv34200.example.com/getData';
const EXT_SVCURL21000 = process.env.VCAP_URL21000 || 'https://somesv21000.example.com/getData';
const EXT_SVCURL10845 = process.env.VCAP_URL10845 || 'https://somesv10845.example.com/getData';
const EXT_SVCURL4042 = process.env.VCAP_URL4042 || 'https://somesv4042.example.com/getData';
const EXT_SVCURL27147 = process.env.VCAP_URL27147 || 'https://somesv27147.example.com/getData';
const EXT_SVCURL21679 = process.env.VCAP_URL21679 || 'https://somesv21679.example.com/getData';
const EXT_SVCURL5335 = process.env.VCAP_URL5335 || 'https://somesv5335.example.com/getData';
const EXT_SVCURL21616 = process.env.VCAP_URL21616 || 'https://somesv21616.example.com/getData';
const EXT_SVCURL17112 = process.env.VCAP_URL17112 || 'https://somesv17112.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6997</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));