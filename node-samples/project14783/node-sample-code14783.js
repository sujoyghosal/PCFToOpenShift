const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14783;
const EXT_SVCURL2973 = process.env.VCAP_URL2973 || 'https://somesv2973.example.com/getData';
const EXT_SVCURL10812 = process.env.VCAP_URL10812 || 'https://somesv10812.example.com/getData';
const EXT_SVCURL19111 = process.env.VCAP_URL19111 || 'https://somesv19111.example.com/getData';
const EXT_SVCURL26381 = process.env.VCAP_URL26381 || 'https://somesv26381.example.com/getData';
const EXT_SVCURL12888 = process.env.VCAP_URL12888 || 'https://somesv12888.example.com/getData';
const EXT_SVCURL4605 = process.env.VCAP_URL4605 || 'https://somesv4605.example.com/getData';
const EXT_SVCURL3386 = process.env.VCAP_URL3386 || 'https://somesv3386.example.com/getData';
const EXT_SVCURL17083 = process.env.VCAP_URL17083 || 'https://somesv17083.example.com/getData';
const EXT_SVCURL21642 = process.env.VCAP_URL21642 || 'https://somesv21642.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14783</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));