const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16417;
const EXT_SVCURL4397 = process.env.VCAP_URL4397 || 'https://somesv4397.example.com/getData';
const EXT_SVCURL12667 = process.env.VCAP_URL12667 || 'https://somesv12667.example.com/getData';
const EXT_SVCURL34578 = process.env.VCAP_URL34578 || 'https://somesv34578.example.com/getData';
const EXT_SVCURL8183 = process.env.VCAP_URL8183 || 'https://somesv8183.example.com/getData';
const EXT_SVCURL14006 = process.env.VCAP_URL14006 || 'https://somesv14006.example.com/getData';
const EXT_SVCURL28628 = process.env.VCAP_URL28628 || 'https://somesv28628.example.com/getData';
const EXT_SVCURL17044 = process.env.VCAP_URL17044 || 'https://somesv17044.example.com/getData';
const EXT_SVCURL32259 = process.env.VCAP_URL32259 || 'https://somesv32259.example.com/getData';
const EXT_SVCURL6959 = process.env.VCAP_URL6959 || 'https://somesv6959.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16417</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
