const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8700;
const EXT_SVCURL22279 = process.env.VCAP_URL22279 || 'https://somesv22279.example.com/getData';
const EXT_SVCURL10398 = process.env.VCAP_URL10398 || 'https://somesv10398.example.com/getData';
const EXT_SVCURL17783 = process.env.VCAP_URL17783 || 'https://somesv17783.example.com/getData';
const EXT_SVCURL19622 = process.env.VCAP_URL19622 || 'https://somesv19622.example.com/getData';
const EXT_SVCURL23802 = process.env.VCAP_URL23802 || 'https://somesv23802.example.com/getData';
const EXT_SVCURL4644 = process.env.VCAP_URL4644 || 'https://somesv4644.example.com/getData';
const EXT_SVCURL2309 = process.env.VCAP_URL2309 || 'https://somesv2309.example.com/getData';
const EXT_SVCURL31808 = process.env.VCAP_URL31808 || 'https://somesv31808.example.com/getData';
const EXT_SVCURL7920 = process.env.VCAP_URL7920 || 'https://somesv7920.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8700</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
