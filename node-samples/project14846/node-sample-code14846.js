const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14846;
const EXT_SVCURL15201 = process.env.VCAP_URL15201 || 'https://somesv15201.example.com/getData';
const EXT_SVCURL21315 = process.env.VCAP_URL21315 || 'https://somesv21315.example.com/getData';
const EXT_SVCURL8800 = process.env.VCAP_URL8800 || 'https://somesv8800.example.com/getData';
const EXT_SVCURL31847 = process.env.VCAP_URL31847 || 'https://somesv31847.example.com/getData';
const EXT_SVCURL24275 = process.env.VCAP_URL24275 || 'https://somesv24275.example.com/getData';
const EXT_SVCURL12303 = process.env.VCAP_URL12303 || 'https://somesv12303.example.com/getData';
const EXT_SVCURL4780 = process.env.VCAP_URL4780 || 'https://somesv4780.example.com/getData';
const EXT_SVCURL6151 = process.env.VCAP_URL6151 || 'https://somesv6151.example.com/getData';
const EXT_SVCURL6254 = process.env.VCAP_URL6254 || 'https://somesv6254.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14846</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));