const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33312;
const EXT_SVCURL24350 = process.env.VCAP_URL24350 || 'https://somesv24350.example.com/getData';
const EXT_SVCURL26852 = process.env.VCAP_URL26852 || 'https://somesv26852.example.com/getData';
const EXT_SVCURL8446 = process.env.VCAP_URL8446 || 'https://somesv8446.example.com/getData';
const EXT_SVCURL13813 = process.env.VCAP_URL13813 || 'https://somesv13813.example.com/getData';
const EXT_SVCURL4580 = process.env.VCAP_URL4580 || 'https://somesv4580.example.com/getData';
const EXT_SVCURL24646 = process.env.VCAP_URL24646 || 'https://somesv24646.example.com/getData';
const EXT_SVCURL13904 = process.env.VCAP_URL13904 || 'https://somesv13904.example.com/getData';
const EXT_SVCURL33868 = process.env.VCAP_URL33868 || 'https://somesv33868.example.com/getData';
const EXT_SVCURL10010 = process.env.VCAP_URL10010 || 'https://somesv10010.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33312</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));