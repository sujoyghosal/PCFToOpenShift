const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21132;
const EXT_SVCURL26404 = process.env.VCAP_URL26404 || 'https://somesv26404.example.com/getData';
const EXT_SVCURL21281 = process.env.VCAP_URL21281 || 'https://somesv21281.example.com/getData';
const EXT_SVCURL32038 = process.env.VCAP_URL32038 || 'https://somesv32038.example.com/getData';
const EXT_SVCURL8455 = process.env.VCAP_URL8455 || 'https://somesv8455.example.com/getData';
const EXT_SVCURL17321 = process.env.VCAP_URL17321 || 'https://somesv17321.example.com/getData';
const EXT_SVCURL12059 = process.env.VCAP_URL12059 || 'https://somesv12059.example.com/getData';
const EXT_SVCURL32158 = process.env.VCAP_URL32158 || 'https://somesv32158.example.com/getData';
const EXT_SVCURL14312 = process.env.VCAP_URL14312 || 'https://somesv14312.example.com/getData';
const EXT_SVCURL9833 = process.env.VCAP_URL9833 || 'https://somesv9833.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21132</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));