const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34975;
const EXT_SVCURL27378 = process.env.VCAP_URL27378 || 'https://somesv27378.example.com/getData';
const EXT_SVCURL10214 = process.env.VCAP_URL10214 || 'https://somesv10214.example.com/getData';
const EXT_SVCURL31495 = process.env.VCAP_URL31495 || 'https://somesv31495.example.com/getData';
const EXT_SVCURL13192 = process.env.VCAP_URL13192 || 'https://somesv13192.example.com/getData';
const EXT_SVCURL4570 = process.env.VCAP_URL4570 || 'https://somesv4570.example.com/getData';
const EXT_SVCURL8988 = process.env.VCAP_URL8988 || 'https://somesv8988.example.com/getData';
const EXT_SVCURL33719 = process.env.VCAP_URL33719 || 'https://somesv33719.example.com/getData';
const EXT_SVCURL13298 = process.env.VCAP_URL13298 || 'https://somesv13298.example.com/getData';
const EXT_SVCURL16240 = process.env.VCAP_URL16240 || 'https://somesv16240.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34975</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
