const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24686;
const EXT_SVCURL2878 = process.env.VCAP_URL2878 || 'https://somesv2878.example.com/getData';
const EXT_SVCURL33778 = process.env.VCAP_URL33778 || 'https://somesv33778.example.com/getData';
const EXT_SVCURL26814 = process.env.VCAP_URL26814 || 'https://somesv26814.example.com/getData';
const EXT_SVCURL17814 = process.env.VCAP_URL17814 || 'https://somesv17814.example.com/getData';
const EXT_SVCURL9044 = process.env.VCAP_URL9044 || 'https://somesv9044.example.com/getData';
const EXT_SVCURL34594 = process.env.VCAP_URL34594 || 'https://somesv34594.example.com/getData';
const EXT_SVCURL26015 = process.env.VCAP_URL26015 || 'https://somesv26015.example.com/getData';
const EXT_SVCURL34334 = process.env.VCAP_URL34334 || 'https://somesv34334.example.com/getData';
const EXT_SVCURL6738 = process.env.VCAP_URL6738 || 'https://somesv6738.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24686</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));