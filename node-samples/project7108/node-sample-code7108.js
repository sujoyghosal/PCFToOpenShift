const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7108;
const EXT_SVCURL13944 = process.env.VCAP_URL13944 || 'https://somesv13944.example.com/getData';
const EXT_SVCURL9740 = process.env.VCAP_URL9740 || 'https://somesv9740.example.com/getData';
const EXT_SVCURL17595 = process.env.VCAP_URL17595 || 'https://somesv17595.example.com/getData';
const EXT_SVCURL18742 = process.env.VCAP_URL18742 || 'https://somesv18742.example.com/getData';
const EXT_SVCURL27511 = process.env.VCAP_URL27511 || 'https://somesv27511.example.com/getData';
const EXT_SVCURL27691 = process.env.VCAP_URL27691 || 'https://somesv27691.example.com/getData';
const EXT_SVCURL15436 = process.env.VCAP_URL15436 || 'https://somesv15436.example.com/getData';
const EXT_SVCURL2398 = process.env.VCAP_URL2398 || 'https://somesv2398.example.com/getData';
const EXT_SVCURL13437 = process.env.VCAP_URL13437 || 'https://somesv13437.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7108</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
