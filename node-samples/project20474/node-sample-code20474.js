const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20474;
const EXT_SVCURL21592 = process.env.VCAP_URL21592 || 'https://somesv21592.example.com/getData';
const EXT_SVCURL16010 = process.env.VCAP_URL16010 || 'https://somesv16010.example.com/getData';
const EXT_SVCURL25276 = process.env.VCAP_URL25276 || 'https://somesv25276.example.com/getData';
const EXT_SVCURL34542 = process.env.VCAP_URL34542 || 'https://somesv34542.example.com/getData';
const EXT_SVCURL16206 = process.env.VCAP_URL16206 || 'https://somesv16206.example.com/getData';
const EXT_SVCURL34563 = process.env.VCAP_URL34563 || 'https://somesv34563.example.com/getData';
const EXT_SVCURL16800 = process.env.VCAP_URL16800 || 'https://somesv16800.example.com/getData';
const EXT_SVCURL16417 = process.env.VCAP_URL16417 || 'https://somesv16417.example.com/getData';
const EXT_SVCURL5082 = process.env.VCAP_URL5082 || 'https://somesv5082.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20474</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
