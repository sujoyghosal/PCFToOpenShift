const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15273;
const EXT_SVCURL9385 = process.env.VCAP_URL9385 || 'https://somesv9385.example.com/getData';
const EXT_SVCURL30597 = process.env.VCAP_URL30597 || 'https://somesv30597.example.com/getData';
const EXT_SVCURL14831 = process.env.VCAP_URL14831 || 'https://somesv14831.example.com/getData';
const EXT_SVCURL2552 = process.env.VCAP_URL2552 || 'https://somesv2552.example.com/getData';
const EXT_SVCURL8140 = process.env.VCAP_URL8140 || 'https://somesv8140.example.com/getData';
const EXT_SVCURL18291 = process.env.VCAP_URL18291 || 'https://somesv18291.example.com/getData';
const EXT_SVCURL21139 = process.env.VCAP_URL21139 || 'https://somesv21139.example.com/getData';
const EXT_SVCURL32073 = process.env.VCAP_URL32073 || 'https://somesv32073.example.com/getData';
const EXT_SVCURL16300 = process.env.VCAP_URL16300 || 'https://somesv16300.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15273</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));