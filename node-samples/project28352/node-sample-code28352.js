const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28352;
const EXT_SVCURL19551 = process.env.VCAP_URL19551 || 'https://somesv19551.example.com/getData';
const EXT_SVCURL23445 = process.env.VCAP_URL23445 || 'https://somesv23445.example.com/getData';
const EXT_SVCURL22810 = process.env.VCAP_URL22810 || 'https://somesv22810.example.com/getData';
const EXT_SVCURL33524 = process.env.VCAP_URL33524 || 'https://somesv33524.example.com/getData';
const EXT_SVCURL21857 = process.env.VCAP_URL21857 || 'https://somesv21857.example.com/getData';
const EXT_SVCURL5395 = process.env.VCAP_URL5395 || 'https://somesv5395.example.com/getData';
const EXT_SVCURL28610 = process.env.VCAP_URL28610 || 'https://somesv28610.example.com/getData';
const EXT_SVCURL31985 = process.env.VCAP_URL31985 || 'https://somesv31985.example.com/getData';
const EXT_SVCURL29421 = process.env.VCAP_URL29421 || 'https://somesv29421.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28352</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
