const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33321;
const EXT_SVCURL21125 = process.env.VCAP_URL21125 || 'https://somesv21125.example.com/getData';
const EXT_SVCURL14218 = process.env.VCAP_URL14218 || 'https://somesv14218.example.com/getData';
const EXT_SVCURL32730 = process.env.VCAP_URL32730 || 'https://somesv32730.example.com/getData';
const EXT_SVCURL26208 = process.env.VCAP_URL26208 || 'https://somesv26208.example.com/getData';
const EXT_SVCURL31246 = process.env.VCAP_URL31246 || 'https://somesv31246.example.com/getData';
const EXT_SVCURL14400 = process.env.VCAP_URL14400 || 'https://somesv14400.example.com/getData';
const EXT_SVCURL34752 = process.env.VCAP_URL34752 || 'https://somesv34752.example.com/getData';
const EXT_SVCURL17368 = process.env.VCAP_URL17368 || 'https://somesv17368.example.com/getData';
const EXT_SVCURL10962 = process.env.VCAP_URL10962 || 'https://somesv10962.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33321</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
