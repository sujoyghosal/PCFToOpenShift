const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34980;
const EXT_SVCURL18843 = process.env.VCAP_URL18843 || 'https://somesv18843.example.com/getData';
const EXT_SVCURL21202 = process.env.VCAP_URL21202 || 'https://somesv21202.example.com/getData';
const EXT_SVCURL27884 = process.env.VCAP_URL27884 || 'https://somesv27884.example.com/getData';
const EXT_SVCURL11032 = process.env.VCAP_URL11032 || 'https://somesv11032.example.com/getData';
const EXT_SVCURL18276 = process.env.VCAP_URL18276 || 'https://somesv18276.example.com/getData';
const EXT_SVCURL4256 = process.env.VCAP_URL4256 || 'https://somesv4256.example.com/getData';
const EXT_SVCURL34482 = process.env.VCAP_URL34482 || 'https://somesv34482.example.com/getData';
const EXT_SVCURL9911 = process.env.VCAP_URL9911 || 'https://somesv9911.example.com/getData';
const EXT_SVCURL33351 = process.env.VCAP_URL33351 || 'https://somesv33351.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34980</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
