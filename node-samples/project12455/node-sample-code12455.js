const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12455;
const EXT_SVCURL12120 = process.env.VCAP_URL12120 || 'https://somesv12120.example.com/getData';
const EXT_SVCURL29013 = process.env.VCAP_URL29013 || 'https://somesv29013.example.com/getData';
const EXT_SVCURL31476 = process.env.VCAP_URL31476 || 'https://somesv31476.example.com/getData';
const EXT_SVCURL5774 = process.env.VCAP_URL5774 || 'https://somesv5774.example.com/getData';
const EXT_SVCURL30599 = process.env.VCAP_URL30599 || 'https://somesv30599.example.com/getData';
const EXT_SVCURL8212 = process.env.VCAP_URL8212 || 'https://somesv8212.example.com/getData';
const EXT_SVCURL24790 = process.env.VCAP_URL24790 || 'https://somesv24790.example.com/getData';
const EXT_SVCURL20949 = process.env.VCAP_URL20949 || 'https://somesv20949.example.com/getData';
const EXT_SVCURL6650 = process.env.VCAP_URL6650 || 'https://somesv6650.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12455</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
