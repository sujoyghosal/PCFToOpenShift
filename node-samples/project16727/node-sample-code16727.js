const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16727;
const EXT_SVCURL10304 = process.env.VCAP_URL10304 || 'https://somesv10304.example.com/getData';
const EXT_SVCURL7374 = process.env.VCAP_URL7374 || 'https://somesv7374.example.com/getData';
const EXT_SVCURL10394 = process.env.VCAP_URL10394 || 'https://somesv10394.example.com/getData';
const EXT_SVCURL19325 = process.env.VCAP_URL19325 || 'https://somesv19325.example.com/getData';
const EXT_SVCURL27651 = process.env.VCAP_URL27651 || 'https://somesv27651.example.com/getData';
const EXT_SVCURL10208 = process.env.VCAP_URL10208 || 'https://somesv10208.example.com/getData';
const EXT_SVCURL2641 = process.env.VCAP_URL2641 || 'https://somesv2641.example.com/getData';
const EXT_SVCURL33335 = process.env.VCAP_URL33335 || 'https://somesv33335.example.com/getData';
const EXT_SVCURL13858 = process.env.VCAP_URL13858 || 'https://somesv13858.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16727</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));