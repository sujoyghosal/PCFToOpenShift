const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16016;
const EXT_SVCURL4545 = process.env.VCAP_URL4545 || 'https://somesv4545.example.com/getData';
const EXT_SVCURL13340 = process.env.VCAP_URL13340 || 'https://somesv13340.example.com/getData';
const EXT_SVCURL21184 = process.env.VCAP_URL21184 || 'https://somesv21184.example.com/getData';
const EXT_SVCURL17243 = process.env.VCAP_URL17243 || 'https://somesv17243.example.com/getData';
const EXT_SVCURL28199 = process.env.VCAP_URL28199 || 'https://somesv28199.example.com/getData';
const EXT_SVCURL18820 = process.env.VCAP_URL18820 || 'https://somesv18820.example.com/getData';
const EXT_SVCURL8521 = process.env.VCAP_URL8521 || 'https://somesv8521.example.com/getData';
const EXT_SVCURL32634 = process.env.VCAP_URL32634 || 'https://somesv32634.example.com/getData';
const EXT_SVCURL3645 = process.env.VCAP_URL3645 || 'https://somesv3645.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16016</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
