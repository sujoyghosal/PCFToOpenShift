const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15960;
const EXT_SVCURL13418 = process.env.VCAP_URL13418 || 'https://somesv13418.example.com/getData';
const EXT_SVCURL11303 = process.env.VCAP_URL11303 || 'https://somesv11303.example.com/getData';
const EXT_SVCURL7342 = process.env.VCAP_URL7342 || 'https://somesv7342.example.com/getData';
const EXT_SVCURL5792 = process.env.VCAP_URL5792 || 'https://somesv5792.example.com/getData';
const EXT_SVCURL33813 = process.env.VCAP_URL33813 || 'https://somesv33813.example.com/getData';
const EXT_SVCURL19892 = process.env.VCAP_URL19892 || 'https://somesv19892.example.com/getData';
const EXT_SVCURL2700 = process.env.VCAP_URL2700 || 'https://somesv2700.example.com/getData';
const EXT_SVCURL30326 = process.env.VCAP_URL30326 || 'https://somesv30326.example.com/getData';
const EXT_SVCURL11890 = process.env.VCAP_URL11890 || 'https://somesv11890.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15960</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));