const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5049;
const EXT_SVCURL19991 = process.env.VCAP_URL19991 || 'https://somesv19991.example.com/getData';
const EXT_SVCURL10495 = process.env.VCAP_URL10495 || 'https://somesv10495.example.com/getData';
const EXT_SVCURL7196 = process.env.VCAP_URL7196 || 'https://somesv7196.example.com/getData';
const EXT_SVCURL24790 = process.env.VCAP_URL24790 || 'https://somesv24790.example.com/getData';
const EXT_SVCURL22724 = process.env.VCAP_URL22724 || 'https://somesv22724.example.com/getData';
const EXT_SVCURL6586 = process.env.VCAP_URL6586 || 'https://somesv6586.example.com/getData';
const EXT_SVCURL22371 = process.env.VCAP_URL22371 || 'https://somesv22371.example.com/getData';
const EXT_SVCURL30633 = process.env.VCAP_URL30633 || 'https://somesv30633.example.com/getData';
const EXT_SVCURL21406 = process.env.VCAP_URL21406 || 'https://somesv21406.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5049</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
