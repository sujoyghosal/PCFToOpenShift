const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8370;
const EXT_SVCURL34235 = process.env.VCAP_URL34235 || 'https://somesv34235.example.com/getData';
const EXT_SVCURL18672 = process.env.VCAP_URL18672 || 'https://somesv18672.example.com/getData';
const EXT_SVCURL29805 = process.env.VCAP_URL29805 || 'https://somesv29805.example.com/getData';
const EXT_SVCURL16365 = process.env.VCAP_URL16365 || 'https://somesv16365.example.com/getData';
const EXT_SVCURL18991 = process.env.VCAP_URL18991 || 'https://somesv18991.example.com/getData';
const EXT_SVCURL12191 = process.env.VCAP_URL12191 || 'https://somesv12191.example.com/getData';
const EXT_SVCURL7657 = process.env.VCAP_URL7657 || 'https://somesv7657.example.com/getData';
const EXT_SVCURL24570 = process.env.VCAP_URL24570 || 'https://somesv24570.example.com/getData';
const EXT_SVCURL14572 = process.env.VCAP_URL14572 || 'https://somesv14572.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8370</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));