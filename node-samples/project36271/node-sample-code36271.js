const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 36271;
const EXT_SVCURL25359 = process.env.VCAP_URL25359 || 'https://somesv25359.example.com/getData';
const EXT_SVCURL31421 = process.env.VCAP_URL31421 || 'https://somesv31421.example.com/getData';
const EXT_SVCURL3377 = process.env.VCAP_URL3377 || 'https://somesv3377.example.com/getData';
const EXT_SVCURL9964 = process.env.VCAP_URL9964 || 'https://somesv9964.example.com/getData';
const EXT_SVCURL25561 = process.env.VCAP_URL25561 || 'https://somesv25561.example.com/getData';
const EXT_SVCURL29479 = process.env.VCAP_URL29479 || 'https://somesv29479.example.com/getData';
const EXT_SVCURL10777 = process.env.VCAP_URL10777 || 'https://somesv10777.example.com/getData';
const EXT_SVCURL7883 = process.env.VCAP_URL7883 || 'https://somesv7883.example.com/getData';
const EXT_SVCURL29145 = process.env.VCAP_URL29145 || 'https://somesv29145.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36271</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));