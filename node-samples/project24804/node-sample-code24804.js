const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24804;
const EXT_SVCURL2516 = process.env.VCAP_URL2516 || 'https://somesv2516.example.com/getData';
const EXT_SVCURL17363 = process.env.VCAP_URL17363 || 'https://somesv17363.example.com/getData';
const EXT_SVCURL19860 = process.env.VCAP_URL19860 || 'https://somesv19860.example.com/getData';
const EXT_SVCURL30098 = process.env.VCAP_URL30098 || 'https://somesv30098.example.com/getData';
const EXT_SVCURL6087 = process.env.VCAP_URL6087 || 'https://somesv6087.example.com/getData';
const EXT_SVCURL5042 = process.env.VCAP_URL5042 || 'https://somesv5042.example.com/getData';
const EXT_SVCURL6794 = process.env.VCAP_URL6794 || 'https://somesv6794.example.com/getData';
const EXT_SVCURL30882 = process.env.VCAP_URL30882 || 'https://somesv30882.example.com/getData';
const EXT_SVCURL4294 = process.env.VCAP_URL4294 || 'https://somesv4294.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24804</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));