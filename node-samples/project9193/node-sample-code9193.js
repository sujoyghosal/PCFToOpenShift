const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9193;
const EXT_SVCURL30201 = process.env.VCAP_URL30201 || 'https://somesv30201.example.com/getData';
const EXT_SVCURL6035 = process.env.VCAP_URL6035 || 'https://somesv6035.example.com/getData';
const EXT_SVCURL20433 = process.env.VCAP_URL20433 || 'https://somesv20433.example.com/getData';
const EXT_SVCURL4956 = process.env.VCAP_URL4956 || 'https://somesv4956.example.com/getData';
const EXT_SVCURL2087 = process.env.VCAP_URL2087 || 'https://somesv2087.example.com/getData';
const EXT_SVCURL17019 = process.env.VCAP_URL17019 || 'https://somesv17019.example.com/getData';
const EXT_SVCURL7820 = process.env.VCAP_URL7820 || 'https://somesv7820.example.com/getData';
const EXT_SVCURL16421 = process.env.VCAP_URL16421 || 'https://somesv16421.example.com/getData';
const EXT_SVCURL27976 = process.env.VCAP_URL27976 || 'https://somesv27976.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9193</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
