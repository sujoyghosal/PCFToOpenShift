const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 11983;
const EXT_SVCURL11322 = process.env.VCAP_URL11322 || 'https://somesv11322.example.com/getData';
const EXT_SVCURL12947 = process.env.VCAP_URL12947 || 'https://somesv12947.example.com/getData';
const EXT_SVCURL6325 = process.env.VCAP_URL6325 || 'https://somesv6325.example.com/getData';
const EXT_SVCURL2216 = process.env.VCAP_URL2216 || 'https://somesv2216.example.com/getData';
const EXT_SVCURL24590 = process.env.VCAP_URL24590 || 'https://somesv24590.example.com/getData';
const EXT_SVCURL10137 = process.env.VCAP_URL10137 || 'https://somesv10137.example.com/getData';
const EXT_SVCURL34339 = process.env.VCAP_URL34339 || 'https://somesv34339.example.com/getData';
const EXT_SVCURL3233 = process.env.VCAP_URL3233 || 'https://somesv3233.example.com/getData';
const EXT_SVCURL19413 = process.env.VCAP_URL19413 || 'https://somesv19413.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #11983</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));