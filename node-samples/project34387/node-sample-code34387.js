const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34387;
const EXT_SVCURL16091 = process.env.VCAP_URL16091 || 'https://somesv16091.example.com/getData';
const EXT_SVCURL23861 = process.env.VCAP_URL23861 || 'https://somesv23861.example.com/getData';
const EXT_SVCURL31725 = process.env.VCAP_URL31725 || 'https://somesv31725.example.com/getData';
const EXT_SVCURL30477 = process.env.VCAP_URL30477 || 'https://somesv30477.example.com/getData';
const EXT_SVCURL19520 = process.env.VCAP_URL19520 || 'https://somesv19520.example.com/getData';
const EXT_SVCURL17400 = process.env.VCAP_URL17400 || 'https://somesv17400.example.com/getData';
const EXT_SVCURL24863 = process.env.VCAP_URL24863 || 'https://somesv24863.example.com/getData';
const EXT_SVCURL5992 = process.env.VCAP_URL5992 || 'https://somesv5992.example.com/getData';
const EXT_SVCURL26042 = process.env.VCAP_URL26042 || 'https://somesv26042.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34387</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
