const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28380;
const EXT_SVCURL29448 = process.env.VCAP_URL29448 || 'https://somesv29448.example.com/getData';
const EXT_SVCURL7080 = process.env.VCAP_URL7080 || 'https://somesv7080.example.com/getData';
const EXT_SVCURL17025 = process.env.VCAP_URL17025 || 'https://somesv17025.example.com/getData';
const EXT_SVCURL20370 = process.env.VCAP_URL20370 || 'https://somesv20370.example.com/getData';
const EXT_SVCURL32088 = process.env.VCAP_URL32088 || 'https://somesv32088.example.com/getData';
const EXT_SVCURL3945 = process.env.VCAP_URL3945 || 'https://somesv3945.example.com/getData';
const EXT_SVCURL10132 = process.env.VCAP_URL10132 || 'https://somesv10132.example.com/getData';
const EXT_SVCURL10828 = process.env.VCAP_URL10828 || 'https://somesv10828.example.com/getData';
const EXT_SVCURL19946 = process.env.VCAP_URL19946 || 'https://somesv19946.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28380</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
