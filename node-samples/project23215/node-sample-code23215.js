const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23215;
const EXT_SVCURL16369 = process.env.VCAP_URL16369 || 'https://somesv16369.example.com/getData';
const EXT_SVCURL7396 = process.env.VCAP_URL7396 || 'https://somesv7396.example.com/getData';
const EXT_SVCURL5124 = process.env.VCAP_URL5124 || 'https://somesv5124.example.com/getData';
const EXT_SVCURL27537 = process.env.VCAP_URL27537 || 'https://somesv27537.example.com/getData';
const EXT_SVCURL25873 = process.env.VCAP_URL25873 || 'https://somesv25873.example.com/getData';
const EXT_SVCURL17723 = process.env.VCAP_URL17723 || 'https://somesv17723.example.com/getData';
const EXT_SVCURL22403 = process.env.VCAP_URL22403 || 'https://somesv22403.example.com/getData';
const EXT_SVCURL7577 = process.env.VCAP_URL7577 || 'https://somesv7577.example.com/getData';
const EXT_SVCURL10776 = process.env.VCAP_URL10776 || 'https://somesv10776.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23215</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
