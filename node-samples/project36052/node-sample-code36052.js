const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 36052;
const EXT_SVCURL8819 = process.env.VCAP_URL8819 || 'https://somesv8819.example.com/getData';
const EXT_SVCURL3430 = process.env.VCAP_URL3430 || 'https://somesv3430.example.com/getData';
const EXT_SVCURL12526 = process.env.VCAP_URL12526 || 'https://somesv12526.example.com/getData';
const EXT_SVCURL17785 = process.env.VCAP_URL17785 || 'https://somesv17785.example.com/getData';
const EXT_SVCURL2536 = process.env.VCAP_URL2536 || 'https://somesv2536.example.com/getData';
const EXT_SVCURL21207 = process.env.VCAP_URL21207 || 'https://somesv21207.example.com/getData';
const EXT_SVCURL20516 = process.env.VCAP_URL20516 || 'https://somesv20516.example.com/getData';
const EXT_SVCURL3457 = process.env.VCAP_URL3457 || 'https://somesv3457.example.com/getData';
const EXT_SVCURL15124 = process.env.VCAP_URL15124 || 'https://somesv15124.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36052</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
