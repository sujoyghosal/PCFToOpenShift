const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7702;
const EXT_SVCURL34127 = process.env.VCAP_URL34127 || 'https://somesv34127.example.com/getData';
const EXT_SVCURL27844 = process.env.VCAP_URL27844 || 'https://somesv27844.example.com/getData';
const EXT_SVCURL5723 = process.env.VCAP_URL5723 || 'https://somesv5723.example.com/getData';
const EXT_SVCURL30485 = process.env.VCAP_URL30485 || 'https://somesv30485.example.com/getData';
const EXT_SVCURL30823 = process.env.VCAP_URL30823 || 'https://somesv30823.example.com/getData';
const EXT_SVCURL31802 = process.env.VCAP_URL31802 || 'https://somesv31802.example.com/getData';
const EXT_SVCURL4198 = process.env.VCAP_URL4198 || 'https://somesv4198.example.com/getData';
const EXT_SVCURL14365 = process.env.VCAP_URL14365 || 'https://somesv14365.example.com/getData';
const EXT_SVCURL3586 = process.env.VCAP_URL3586 || 'https://somesv3586.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7702</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));