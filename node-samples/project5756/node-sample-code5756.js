const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5756;
const EXT_SVCURL22518 = process.env.VCAP_URL22518 || 'https://somesv22518.example.com/getData';
const EXT_SVCURL5650 = process.env.VCAP_URL5650 || 'https://somesv5650.example.com/getData';
const EXT_SVCURL16661 = process.env.VCAP_URL16661 || 'https://somesv16661.example.com/getData';
const EXT_SVCURL16803 = process.env.VCAP_URL16803 || 'https://somesv16803.example.com/getData';
const EXT_SVCURL32500 = process.env.VCAP_URL32500 || 'https://somesv32500.example.com/getData';
const EXT_SVCURL5445 = process.env.VCAP_URL5445 || 'https://somesv5445.example.com/getData';
const EXT_SVCURL21085 = process.env.VCAP_URL21085 || 'https://somesv21085.example.com/getData';
const EXT_SVCURL24620 = process.env.VCAP_URL24620 || 'https://somesv24620.example.com/getData';
const EXT_SVCURL24050 = process.env.VCAP_URL24050 || 'https://somesv24050.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5756</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));