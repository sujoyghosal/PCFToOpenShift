const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26684;
const EXT_SVCURL17423 = process.env.VCAP_URL17423 || 'https://somesv17423.example.com/getData';
const EXT_SVCURL30037 = process.env.VCAP_URL30037 || 'https://somesv30037.example.com/getData';
const EXT_SVCURL21055 = process.env.VCAP_URL21055 || 'https://somesv21055.example.com/getData';
const EXT_SVCURL33329 = process.env.VCAP_URL33329 || 'https://somesv33329.example.com/getData';
const EXT_SVCURL14812 = process.env.VCAP_URL14812 || 'https://somesv14812.example.com/getData';
const EXT_SVCURL11253 = process.env.VCAP_URL11253 || 'https://somesv11253.example.com/getData';
const EXT_SVCURL16669 = process.env.VCAP_URL16669 || 'https://somesv16669.example.com/getData';
const EXT_SVCURL24219 = process.env.VCAP_URL24219 || 'https://somesv24219.example.com/getData';
const EXT_SVCURL5330 = process.env.VCAP_URL5330 || 'https://somesv5330.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26684</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
