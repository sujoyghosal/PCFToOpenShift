const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35018;
const EXT_SVCURL17017 = process.env.VCAP_URL17017 || 'https://somesv17017.example.com/getData';
const EXT_SVCURL18690 = process.env.VCAP_URL18690 || 'https://somesv18690.example.com/getData';
const EXT_SVCURL2047 = process.env.VCAP_URL2047 || 'https://somesv2047.example.com/getData';
const EXT_SVCURL29658 = process.env.VCAP_URL29658 || 'https://somesv29658.example.com/getData';
const EXT_SVCURL11168 = process.env.VCAP_URL11168 || 'https://somesv11168.example.com/getData';
const EXT_SVCURL2972 = process.env.VCAP_URL2972 || 'https://somesv2972.example.com/getData';
const EXT_SVCURL19507 = process.env.VCAP_URL19507 || 'https://somesv19507.example.com/getData';
const EXT_SVCURL34398 = process.env.VCAP_URL34398 || 'https://somesv34398.example.com/getData';
const EXT_SVCURL29426 = process.env.VCAP_URL29426 || 'https://somesv29426.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35018</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
