const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8776;
const EXT_SVCURL2861 = process.env.VCAP_URL2861 || 'https://somesv2861.example.com/getData';
const EXT_SVCURL3037 = process.env.VCAP_URL3037 || 'https://somesv3037.example.com/getData';
const EXT_SVCURL20805 = process.env.VCAP_URL20805 || 'https://somesv20805.example.com/getData';
const EXT_SVCURL29353 = process.env.VCAP_URL29353 || 'https://somesv29353.example.com/getData';
const EXT_SVCURL9970 = process.env.VCAP_URL9970 || 'https://somesv9970.example.com/getData';
const EXT_SVCURL20128 = process.env.VCAP_URL20128 || 'https://somesv20128.example.com/getData';
const EXT_SVCURL27924 = process.env.VCAP_URL27924 || 'https://somesv27924.example.com/getData';
const EXT_SVCURL21683 = process.env.VCAP_URL21683 || 'https://somesv21683.example.com/getData';
const EXT_SVCURL2639 = process.env.VCAP_URL2639 || 'https://somesv2639.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8776</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
