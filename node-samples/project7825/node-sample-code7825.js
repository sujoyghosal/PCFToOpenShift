const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7825;
const EXT_SVCURL24445 = process.env.VCAP_URL24445 || 'https://somesv24445.example.com/getData';
const EXT_SVCURL34432 = process.env.VCAP_URL34432 || 'https://somesv34432.example.com/getData';
const EXT_SVCURL10364 = process.env.VCAP_URL10364 || 'https://somesv10364.example.com/getData';
const EXT_SVCURL19712 = process.env.VCAP_URL19712 || 'https://somesv19712.example.com/getData';
const EXT_SVCURL34200 = process.env.VCAP_URL34200 || 'https://somesv34200.example.com/getData';
const EXT_SVCURL8738 = process.env.VCAP_URL8738 || 'https://somesv8738.example.com/getData';
const EXT_SVCURL10311 = process.env.VCAP_URL10311 || 'https://somesv10311.example.com/getData';
const EXT_SVCURL25871 = process.env.VCAP_URL25871 || 'https://somesv25871.example.com/getData';
const EXT_SVCURL24234 = process.env.VCAP_URL24234 || 'https://somesv24234.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7825</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
