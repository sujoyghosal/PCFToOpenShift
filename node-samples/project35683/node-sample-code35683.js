const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35683;
const EXT_SVCURL8158 = process.env.VCAP_URL8158 || 'https://somesv8158.example.com/getData';
const EXT_SVCURL13111 = process.env.VCAP_URL13111 || 'https://somesv13111.example.com/getData';
const EXT_SVCURL9989 = process.env.VCAP_URL9989 || 'https://somesv9989.example.com/getData';
const EXT_SVCURL12754 = process.env.VCAP_URL12754 || 'https://somesv12754.example.com/getData';
const EXT_SVCURL19279 = process.env.VCAP_URL19279 || 'https://somesv19279.example.com/getData';
const EXT_SVCURL18758 = process.env.VCAP_URL18758 || 'https://somesv18758.example.com/getData';
const EXT_SVCURL33384 = process.env.VCAP_URL33384 || 'https://somesv33384.example.com/getData';
const EXT_SVCURL25047 = process.env.VCAP_URL25047 || 'https://somesv25047.example.com/getData';
const EXT_SVCURL19982 = process.env.VCAP_URL19982 || 'https://somesv19982.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35683</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
