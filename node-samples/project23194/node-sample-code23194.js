const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23194;
const EXT_SVCURL18531 = process.env.VCAP_URL18531 || 'https://somesv18531.example.com/getData';
const EXT_SVCURL14048 = process.env.VCAP_URL14048 || 'https://somesv14048.example.com/getData';
const EXT_SVCURL22515 = process.env.VCAP_URL22515 || 'https://somesv22515.example.com/getData';
const EXT_SVCURL27284 = process.env.VCAP_URL27284 || 'https://somesv27284.example.com/getData';
const EXT_SVCURL33290 = process.env.VCAP_URL33290 || 'https://somesv33290.example.com/getData';
const EXT_SVCURL20709 = process.env.VCAP_URL20709 || 'https://somesv20709.example.com/getData';
const EXT_SVCURL34272 = process.env.VCAP_URL34272 || 'https://somesv34272.example.com/getData';
const EXT_SVCURL18196 = process.env.VCAP_URL18196 || 'https://somesv18196.example.com/getData';
const EXT_SVCURL7476 = process.env.VCAP_URL7476 || 'https://somesv7476.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23194</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
