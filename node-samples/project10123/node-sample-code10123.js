const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 10123;
const EXT_SVCURL9019 = process.env.VCAP_URL9019 || 'https://somesv9019.example.com/getData';
const EXT_SVCURL2413 = process.env.VCAP_URL2413 || 'https://somesv2413.example.com/getData';
const EXT_SVCURL5676 = process.env.VCAP_URL5676 || 'https://somesv5676.example.com/getData';
const EXT_SVCURL5140 = process.env.VCAP_URL5140 || 'https://somesv5140.example.com/getData';
const EXT_SVCURL4317 = process.env.VCAP_URL4317 || 'https://somesv4317.example.com/getData';
const EXT_SVCURL5476 = process.env.VCAP_URL5476 || 'https://somesv5476.example.com/getData';
const EXT_SVCURL12736 = process.env.VCAP_URL12736 || 'https://somesv12736.example.com/getData';
const EXT_SVCURL34645 = process.env.VCAP_URL34645 || 'https://somesv34645.example.com/getData';
const EXT_SVCURL15481 = process.env.VCAP_URL15481 || 'https://somesv15481.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10123</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
