const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25212;
const EXT_SVCURL29557 = process.env.VCAP_URL29557 || 'https://somesv29557.example.com/getData';
const EXT_SVCURL22066 = process.env.VCAP_URL22066 || 'https://somesv22066.example.com/getData';
const EXT_SVCURL7592 = process.env.VCAP_URL7592 || 'https://somesv7592.example.com/getData';
const EXT_SVCURL14053 = process.env.VCAP_URL14053 || 'https://somesv14053.example.com/getData';
const EXT_SVCURL22937 = process.env.VCAP_URL22937 || 'https://somesv22937.example.com/getData';
const EXT_SVCURL28953 = process.env.VCAP_URL28953 || 'https://somesv28953.example.com/getData';
const EXT_SVCURL32090 = process.env.VCAP_URL32090 || 'https://somesv32090.example.com/getData';
const EXT_SVCURL12788 = process.env.VCAP_URL12788 || 'https://somesv12788.example.com/getData';
const EXT_SVCURL24377 = process.env.VCAP_URL24377 || 'https://somesv24377.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25212</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
