const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8959;
const EXT_SVCURL20737 = process.env.VCAP_URL20737 || 'https://somesv20737.example.com/getData';
const EXT_SVCURL7567 = process.env.VCAP_URL7567 || 'https://somesv7567.example.com/getData';
const EXT_SVCURL23108 = process.env.VCAP_URL23108 || 'https://somesv23108.example.com/getData';
const EXT_SVCURL23825 = process.env.VCAP_URL23825 || 'https://somesv23825.example.com/getData';
const EXT_SVCURL21924 = process.env.VCAP_URL21924 || 'https://somesv21924.example.com/getData';
const EXT_SVCURL17330 = process.env.VCAP_URL17330 || 'https://somesv17330.example.com/getData';
const EXT_SVCURL13512 = process.env.VCAP_URL13512 || 'https://somesv13512.example.com/getData';
const EXT_SVCURL12805 = process.env.VCAP_URL12805 || 'https://somesv12805.example.com/getData';
const EXT_SVCURL8087 = process.env.VCAP_URL8087 || 'https://somesv8087.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8959</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
