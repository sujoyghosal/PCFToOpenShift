const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25067;
const EXT_SVCURL15502 = process.env.VCAP_URL15502 || 'https://somesv15502.example.com/getData';
const EXT_SVCURL20357 = process.env.VCAP_URL20357 || 'https://somesv20357.example.com/getData';
const EXT_SVCURL23196 = process.env.VCAP_URL23196 || 'https://somesv23196.example.com/getData';
const EXT_SVCURL32868 = process.env.VCAP_URL32868 || 'https://somesv32868.example.com/getData';
const EXT_SVCURL12848 = process.env.VCAP_URL12848 || 'https://somesv12848.example.com/getData';
const EXT_SVCURL2530 = process.env.VCAP_URL2530 || 'https://somesv2530.example.com/getData';
const EXT_SVCURL29804 = process.env.VCAP_URL29804 || 'https://somesv29804.example.com/getData';
const EXT_SVCURL10621 = process.env.VCAP_URL10621 || 'https://somesv10621.example.com/getData';
const EXT_SVCURL32419 = process.env.VCAP_URL32419 || 'https://somesv32419.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25067</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));