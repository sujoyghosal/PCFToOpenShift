const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23263;
const EXT_SVCURL32168 = process.env.VCAP_URL32168 || 'https://somesv32168.example.com/getData';
const EXT_SVCURL11663 = process.env.VCAP_URL11663 || 'https://somesv11663.example.com/getData';
const EXT_SVCURL19468 = process.env.VCAP_URL19468 || 'https://somesv19468.example.com/getData';
const EXT_SVCURL33752 = process.env.VCAP_URL33752 || 'https://somesv33752.example.com/getData';
const EXT_SVCURL21688 = process.env.VCAP_URL21688 || 'https://somesv21688.example.com/getData';
const EXT_SVCURL16148 = process.env.VCAP_URL16148 || 'https://somesv16148.example.com/getData';
const EXT_SVCURL10638 = process.env.VCAP_URL10638 || 'https://somesv10638.example.com/getData';
const EXT_SVCURL32084 = process.env.VCAP_URL32084 || 'https://somesv32084.example.com/getData';
const EXT_SVCURL16650 = process.env.VCAP_URL16650 || 'https://somesv16650.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23263</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));