const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9391;
const EXT_SVCURL28141 = process.env.VCAP_URL28141 || 'https://somesv28141.example.com/getData';
const EXT_SVCURL32298 = process.env.VCAP_URL32298 || 'https://somesv32298.example.com/getData';
const EXT_SVCURL24526 = process.env.VCAP_URL24526 || 'https://somesv24526.example.com/getData';
const EXT_SVCURL13001 = process.env.VCAP_URL13001 || 'https://somesv13001.example.com/getData';
const EXT_SVCURL32274 = process.env.VCAP_URL32274 || 'https://somesv32274.example.com/getData';
const EXT_SVCURL7546 = process.env.VCAP_URL7546 || 'https://somesv7546.example.com/getData';
const EXT_SVCURL22614 = process.env.VCAP_URL22614 || 'https://somesv22614.example.com/getData';
const EXT_SVCURL6365 = process.env.VCAP_URL6365 || 'https://somesv6365.example.com/getData';
const EXT_SVCURL14684 = process.env.VCAP_URL14684 || 'https://somesv14684.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9391</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));