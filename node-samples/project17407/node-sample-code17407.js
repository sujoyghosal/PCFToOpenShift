const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 17407;
const EXT_SVCURL25452 = process.env.VCAP_URL25452 || 'https://somesv25452.example.com/getData';
const EXT_SVCURL7501 = process.env.VCAP_URL7501 || 'https://somesv7501.example.com/getData';
const EXT_SVCURL7053 = process.env.VCAP_URL7053 || 'https://somesv7053.example.com/getData';
const EXT_SVCURL14248 = process.env.VCAP_URL14248 || 'https://somesv14248.example.com/getData';
const EXT_SVCURL26980 = process.env.VCAP_URL26980 || 'https://somesv26980.example.com/getData';
const EXT_SVCURL21411 = process.env.VCAP_URL21411 || 'https://somesv21411.example.com/getData';
const EXT_SVCURL8448 = process.env.VCAP_URL8448 || 'https://somesv8448.example.com/getData';
const EXT_SVCURL2031 = process.env.VCAP_URL2031 || 'https://somesv2031.example.com/getData';
const EXT_SVCURL25053 = process.env.VCAP_URL25053 || 'https://somesv25053.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #17407</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
