const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23950;
const EXT_SVCURL32566 = process.env.VCAP_URL32566 || 'https://somesv32566.example.com/getData';
const EXT_SVCURL6191 = process.env.VCAP_URL6191 || 'https://somesv6191.example.com/getData';
const EXT_SVCURL9972 = process.env.VCAP_URL9972 || 'https://somesv9972.example.com/getData';
const EXT_SVCURL16187 = process.env.VCAP_URL16187 || 'https://somesv16187.example.com/getData';
const EXT_SVCURL20027 = process.env.VCAP_URL20027 || 'https://somesv20027.example.com/getData';
const EXT_SVCURL12961 = process.env.VCAP_URL12961 || 'https://somesv12961.example.com/getData';
const EXT_SVCURL32368 = process.env.VCAP_URL32368 || 'https://somesv32368.example.com/getData';
const EXT_SVCURL3275 = process.env.VCAP_URL3275 || 'https://somesv3275.example.com/getData';
const EXT_SVCURL11518 = process.env.VCAP_URL11518 || 'https://somesv11518.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23950</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
