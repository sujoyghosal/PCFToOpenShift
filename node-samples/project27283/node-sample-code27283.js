const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27283;
const EXT_SVCURL9156 = process.env.VCAP_URL9156 || 'https://somesv9156.example.com/getData';
const EXT_SVCURL8034 = process.env.VCAP_URL8034 || 'https://somesv8034.example.com/getData';
const EXT_SVCURL8725 = process.env.VCAP_URL8725 || 'https://somesv8725.example.com/getData';
const EXT_SVCURL29268 = process.env.VCAP_URL29268 || 'https://somesv29268.example.com/getData';
const EXT_SVCURL31870 = process.env.VCAP_URL31870 || 'https://somesv31870.example.com/getData';
const EXT_SVCURL11930 = process.env.VCAP_URL11930 || 'https://somesv11930.example.com/getData';
const EXT_SVCURL5180 = process.env.VCAP_URL5180 || 'https://somesv5180.example.com/getData';
const EXT_SVCURL24232 = process.env.VCAP_URL24232 || 'https://somesv24232.example.com/getData';
const EXT_SVCURL27557 = process.env.VCAP_URL27557 || 'https://somesv27557.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27283</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
