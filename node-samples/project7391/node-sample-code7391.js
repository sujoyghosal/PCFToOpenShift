const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7391;
const EXT_SVCURL15441 = process.env.VCAP_URL15441 || 'https://somesv15441.example.com/getData';
const EXT_SVCURL31238 = process.env.VCAP_URL31238 || 'https://somesv31238.example.com/getData';
const EXT_SVCURL4412 = process.env.VCAP_URL4412 || 'https://somesv4412.example.com/getData';
const EXT_SVCURL31945 = process.env.VCAP_URL31945 || 'https://somesv31945.example.com/getData';
const EXT_SVCURL7312 = process.env.VCAP_URL7312 || 'https://somesv7312.example.com/getData';
const EXT_SVCURL5594 = process.env.VCAP_URL5594 || 'https://somesv5594.example.com/getData';
const EXT_SVCURL15499 = process.env.VCAP_URL15499 || 'https://somesv15499.example.com/getData';
const EXT_SVCURL10119 = process.env.VCAP_URL10119 || 'https://somesv10119.example.com/getData';
const EXT_SVCURL9914 = process.env.VCAP_URL9914 || 'https://somesv9914.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7391</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));