const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16358;
const EXT_SVCURL4318 = process.env.VCAP_URL4318 || 'https://somesv4318.example.com/getData';
const EXT_SVCURL18221 = process.env.VCAP_URL18221 || 'https://somesv18221.example.com/getData';
const EXT_SVCURL5449 = process.env.VCAP_URL5449 || 'https://somesv5449.example.com/getData';
const EXT_SVCURL23930 = process.env.VCAP_URL23930 || 'https://somesv23930.example.com/getData';
const EXT_SVCURL22761 = process.env.VCAP_URL22761 || 'https://somesv22761.example.com/getData';
const EXT_SVCURL2378 = process.env.VCAP_URL2378 || 'https://somesv2378.example.com/getData';
const EXT_SVCURL24583 = process.env.VCAP_URL24583 || 'https://somesv24583.example.com/getData';
const EXT_SVCURL33354 = process.env.VCAP_URL33354 || 'https://somesv33354.example.com/getData';
const EXT_SVCURL25050 = process.env.VCAP_URL25050 || 'https://somesv25050.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16358</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));