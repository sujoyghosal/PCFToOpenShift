const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 30987;
const EXT_SVCURL12090 = process.env.VCAP_URL12090 || 'https://somesv12090.example.com/getData';
const EXT_SVCURL11689 = process.env.VCAP_URL11689 || 'https://somesv11689.example.com/getData';
const EXT_SVCURL12932 = process.env.VCAP_URL12932 || 'https://somesv12932.example.com/getData';
const EXT_SVCURL9007 = process.env.VCAP_URL9007 || 'https://somesv9007.example.com/getData';
const EXT_SVCURL3165 = process.env.VCAP_URL3165 || 'https://somesv3165.example.com/getData';
const EXT_SVCURL19450 = process.env.VCAP_URL19450 || 'https://somesv19450.example.com/getData';
const EXT_SVCURL14654 = process.env.VCAP_URL14654 || 'https://somesv14654.example.com/getData';
const EXT_SVCURL12772 = process.env.VCAP_URL12772 || 'https://somesv12772.example.com/getData';
const EXT_SVCURL27986 = process.env.VCAP_URL27986 || 'https://somesv27986.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #30987</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
