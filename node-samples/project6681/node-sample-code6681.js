const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6681;
const EXT_SVCURL17399 = process.env.VCAP_URL17399 || 'https://somesv17399.example.com/getData';
const EXT_SVCURL5080 = process.env.VCAP_URL5080 || 'https://somesv5080.example.com/getData';
const EXT_SVCURL24619 = process.env.VCAP_URL24619 || 'https://somesv24619.example.com/getData';
const EXT_SVCURL14785 = process.env.VCAP_URL14785 || 'https://somesv14785.example.com/getData';
const EXT_SVCURL7336 = process.env.VCAP_URL7336 || 'https://somesv7336.example.com/getData';
const EXT_SVCURL19608 = process.env.VCAP_URL19608 || 'https://somesv19608.example.com/getData';
const EXT_SVCURL16734 = process.env.VCAP_URL16734 || 'https://somesv16734.example.com/getData';
const EXT_SVCURL4522 = process.env.VCAP_URL4522 || 'https://somesv4522.example.com/getData';
const EXT_SVCURL8800 = process.env.VCAP_URL8800 || 'https://somesv8800.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6681</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
