const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32915;
const EXT_SVCURL19718 = process.env.VCAP_URL19718 || 'https://somesv19718.example.com/getData';
const EXT_SVCURL9390 = process.env.VCAP_URL9390 || 'https://somesv9390.example.com/getData';
const EXT_SVCURL25260 = process.env.VCAP_URL25260 || 'https://somesv25260.example.com/getData';
const EXT_SVCURL26902 = process.env.VCAP_URL26902 || 'https://somesv26902.example.com/getData';
const EXT_SVCURL10118 = process.env.VCAP_URL10118 || 'https://somesv10118.example.com/getData';
const EXT_SVCURL2044 = process.env.VCAP_URL2044 || 'https://somesv2044.example.com/getData';
const EXT_SVCURL15855 = process.env.VCAP_URL15855 || 'https://somesv15855.example.com/getData';
const EXT_SVCURL18148 = process.env.VCAP_URL18148 || 'https://somesv18148.example.com/getData';
const EXT_SVCURL30206 = process.env.VCAP_URL30206 || 'https://somesv30206.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32915</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
