const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32176;
const EXT_SVCURL8172 = process.env.VCAP_URL8172 || 'https://somesv8172.example.com/getData';
const EXT_SVCURL27891 = process.env.VCAP_URL27891 || 'https://somesv27891.example.com/getData';
const EXT_SVCURL5246 = process.env.VCAP_URL5246 || 'https://somesv5246.example.com/getData';
const EXT_SVCURL16153 = process.env.VCAP_URL16153 || 'https://somesv16153.example.com/getData';
const EXT_SVCURL18561 = process.env.VCAP_URL18561 || 'https://somesv18561.example.com/getData';
const EXT_SVCURL4492 = process.env.VCAP_URL4492 || 'https://somesv4492.example.com/getData';
const EXT_SVCURL30903 = process.env.VCAP_URL30903 || 'https://somesv30903.example.com/getData';
const EXT_SVCURL15758 = process.env.VCAP_URL15758 || 'https://somesv15758.example.com/getData';
const EXT_SVCURL18586 = process.env.VCAP_URL18586 || 'https://somesv18586.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32176</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));