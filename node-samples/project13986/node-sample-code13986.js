const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 13986;
const EXT_SVCURL27063 = process.env.VCAP_URL27063 || 'https://somesv27063.example.com/getData';
const EXT_SVCURL3124 = process.env.VCAP_URL3124 || 'https://somesv3124.example.com/getData';
const EXT_SVCURL31753 = process.env.VCAP_URL31753 || 'https://somesv31753.example.com/getData';
const EXT_SVCURL24400 = process.env.VCAP_URL24400 || 'https://somesv24400.example.com/getData';
const EXT_SVCURL24306 = process.env.VCAP_URL24306 || 'https://somesv24306.example.com/getData';
const EXT_SVCURL21750 = process.env.VCAP_URL21750 || 'https://somesv21750.example.com/getData';
const EXT_SVCURL15410 = process.env.VCAP_URL15410 || 'https://somesv15410.example.com/getData';
const EXT_SVCURL21249 = process.env.VCAP_URL21249 || 'https://somesv21249.example.com/getData';
const EXT_SVCURL3856 = process.env.VCAP_URL3856 || 'https://somesv3856.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13986</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));