const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14028;
const EXT_SVCURL10783 = process.env.VCAP_URL10783 || 'https://somesv10783.example.com/getData';
const EXT_SVCURL2962 = process.env.VCAP_URL2962 || 'https://somesv2962.example.com/getData';
const EXT_SVCURL24040 = process.env.VCAP_URL24040 || 'https://somesv24040.example.com/getData';
const EXT_SVCURL17005 = process.env.VCAP_URL17005 || 'https://somesv17005.example.com/getData';
const EXT_SVCURL7028 = process.env.VCAP_URL7028 || 'https://somesv7028.example.com/getData';
const EXT_SVCURL31014 = process.env.VCAP_URL31014 || 'https://somesv31014.example.com/getData';
const EXT_SVCURL8860 = process.env.VCAP_URL8860 || 'https://somesv8860.example.com/getData';
const EXT_SVCURL6015 = process.env.VCAP_URL6015 || 'https://somesv6015.example.com/getData';
const EXT_SVCURL21590 = process.env.VCAP_URL21590 || 'https://somesv21590.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14028</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
