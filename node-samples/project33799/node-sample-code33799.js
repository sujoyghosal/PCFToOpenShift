const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33799;
const EXT_SVCURL7387 = process.env.VCAP_URL7387 || 'https://somesv7387.example.com/getData';
const EXT_SVCURL20253 = process.env.VCAP_URL20253 || 'https://somesv20253.example.com/getData';
const EXT_SVCURL31282 = process.env.VCAP_URL31282 || 'https://somesv31282.example.com/getData';
const EXT_SVCURL15765 = process.env.VCAP_URL15765 || 'https://somesv15765.example.com/getData';
const EXT_SVCURL32510 = process.env.VCAP_URL32510 || 'https://somesv32510.example.com/getData';
const EXT_SVCURL4021 = process.env.VCAP_URL4021 || 'https://somesv4021.example.com/getData';
const EXT_SVCURL29122 = process.env.VCAP_URL29122 || 'https://somesv29122.example.com/getData';
const EXT_SVCURL30933 = process.env.VCAP_URL30933 || 'https://somesv30933.example.com/getData';
const EXT_SVCURL14791 = process.env.VCAP_URL14791 || 'https://somesv14791.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33799</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));