const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35568;
const EXT_SVCURL26830 = process.env.VCAP_URL26830 || 'https://somesv26830.example.com/getData';
const EXT_SVCURL16759 = process.env.VCAP_URL16759 || 'https://somesv16759.example.com/getData';
const EXT_SVCURL19656 = process.env.VCAP_URL19656 || 'https://somesv19656.example.com/getData';
const EXT_SVCURL14783 = process.env.VCAP_URL14783 || 'https://somesv14783.example.com/getData';
const EXT_SVCURL16455 = process.env.VCAP_URL16455 || 'https://somesv16455.example.com/getData';
const EXT_SVCURL21500 = process.env.VCAP_URL21500 || 'https://somesv21500.example.com/getData';
const EXT_SVCURL9286 = process.env.VCAP_URL9286 || 'https://somesv9286.example.com/getData';
const EXT_SVCURL15410 = process.env.VCAP_URL15410 || 'https://somesv15410.example.com/getData';
const EXT_SVCURL3602 = process.env.VCAP_URL3602 || 'https://somesv3602.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35568</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
