const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20327;
const EXT_SVCURL28983 = process.env.VCAP_URL28983 || 'https://somesv28983.example.com/getData';
const EXT_SVCURL22735 = process.env.VCAP_URL22735 || 'https://somesv22735.example.com/getData';
const EXT_SVCURL19228 = process.env.VCAP_URL19228 || 'https://somesv19228.example.com/getData';
const EXT_SVCURL21005 = process.env.VCAP_URL21005 || 'https://somesv21005.example.com/getData';
const EXT_SVCURL28807 = process.env.VCAP_URL28807 || 'https://somesv28807.example.com/getData';
const EXT_SVCURL19373 = process.env.VCAP_URL19373 || 'https://somesv19373.example.com/getData';
const EXT_SVCURL16904 = process.env.VCAP_URL16904 || 'https://somesv16904.example.com/getData';
const EXT_SVCURL28530 = process.env.VCAP_URL28530 || 'https://somesv28530.example.com/getData';
const EXT_SVCURL17583 = process.env.VCAP_URL17583 || 'https://somesv17583.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20327</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
