const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 22029;
const EXT_SVCURL2555 = process.env.VCAP_URL2555 || 'https://somesv2555.example.com/getData';
const EXT_SVCURL7773 = process.env.VCAP_URL7773 || 'https://somesv7773.example.com/getData';
const EXT_SVCURL27060 = process.env.VCAP_URL27060 || 'https://somesv27060.example.com/getData';
const EXT_SVCURL20102 = process.env.VCAP_URL20102 || 'https://somesv20102.example.com/getData';
const EXT_SVCURL24010 = process.env.VCAP_URL24010 || 'https://somesv24010.example.com/getData';
const EXT_SVCURL29536 = process.env.VCAP_URL29536 || 'https://somesv29536.example.com/getData';
const EXT_SVCURL10196 = process.env.VCAP_URL10196 || 'https://somesv10196.example.com/getData';
const EXT_SVCURL9674 = process.env.VCAP_URL9674 || 'https://somesv9674.example.com/getData';
const EXT_SVCURL26141 = process.env.VCAP_URL26141 || 'https://somesv26141.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #22029</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
