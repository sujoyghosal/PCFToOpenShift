const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23516;
const EXT_SVCURL12259 = process.env.VCAP_URL12259 || 'https://somesv12259.example.com/getData';
const EXT_SVCURL28980 = process.env.VCAP_URL28980 || 'https://somesv28980.example.com/getData';
const EXT_SVCURL16990 = process.env.VCAP_URL16990 || 'https://somesv16990.example.com/getData';
const EXT_SVCURL18132 = process.env.VCAP_URL18132 || 'https://somesv18132.example.com/getData';
const EXT_SVCURL2544 = process.env.VCAP_URL2544 || 'https://somesv2544.example.com/getData';
const EXT_SVCURL20749 = process.env.VCAP_URL20749 || 'https://somesv20749.example.com/getData';
const EXT_SVCURL12531 = process.env.VCAP_URL12531 || 'https://somesv12531.example.com/getData';
const EXT_SVCURL19328 = process.env.VCAP_URL19328 || 'https://somesv19328.example.com/getData';
const EXT_SVCURL32705 = process.env.VCAP_URL32705 || 'https://somesv32705.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23516</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));