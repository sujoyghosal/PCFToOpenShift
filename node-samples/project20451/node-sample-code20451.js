const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20451;
const EXT_SVCURL11850 = process.env.VCAP_URL11850 || 'https://somesv11850.example.com/getData';
const EXT_SVCURL29392 = process.env.VCAP_URL29392 || 'https://somesv29392.example.com/getData';
const EXT_SVCURL29596 = process.env.VCAP_URL29596 || 'https://somesv29596.example.com/getData';
const EXT_SVCURL13906 = process.env.VCAP_URL13906 || 'https://somesv13906.example.com/getData';
const EXT_SVCURL28141 = process.env.VCAP_URL28141 || 'https://somesv28141.example.com/getData';
const EXT_SVCURL5253 = process.env.VCAP_URL5253 || 'https://somesv5253.example.com/getData';
const EXT_SVCURL11200 = process.env.VCAP_URL11200 || 'https://somesv11200.example.com/getData';
const EXT_SVCURL16041 = process.env.VCAP_URL16041 || 'https://somesv16041.example.com/getData';
const EXT_SVCURL26246 = process.env.VCAP_URL26246 || 'https://somesv26246.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20451</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));