const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9934;
const EXT_SVCURL10851 = process.env.VCAP_URL10851 || 'https://somesv10851.example.com/getData';
const EXT_SVCURL22474 = process.env.VCAP_URL22474 || 'https://somesv22474.example.com/getData';
const EXT_SVCURL13007 = process.env.VCAP_URL13007 || 'https://somesv13007.example.com/getData';
const EXT_SVCURL4340 = process.env.VCAP_URL4340 || 'https://somesv4340.example.com/getData';
const EXT_SVCURL11774 = process.env.VCAP_URL11774 || 'https://somesv11774.example.com/getData';
const EXT_SVCURL4312 = process.env.VCAP_URL4312 || 'https://somesv4312.example.com/getData';
const EXT_SVCURL21003 = process.env.VCAP_URL21003 || 'https://somesv21003.example.com/getData';
const EXT_SVCURL34716 = process.env.VCAP_URL34716 || 'https://somesv34716.example.com/getData';
const EXT_SVCURL21691 = process.env.VCAP_URL21691 || 'https://somesv21691.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9934</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
