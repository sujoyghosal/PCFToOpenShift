const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8824;
const EXT_SVCURL28789 = process.env.VCAP_URL28789 || 'https://somesv28789.example.com/getData';
const EXT_SVCURL8088 = process.env.VCAP_URL8088 || 'https://somesv8088.example.com/getData';
const EXT_SVCURL21664 = process.env.VCAP_URL21664 || 'https://somesv21664.example.com/getData';
const EXT_SVCURL29190 = process.env.VCAP_URL29190 || 'https://somesv29190.example.com/getData';
const EXT_SVCURL6103 = process.env.VCAP_URL6103 || 'https://somesv6103.example.com/getData';
const EXT_SVCURL20554 = process.env.VCAP_URL20554 || 'https://somesv20554.example.com/getData';
const EXT_SVCURL23711 = process.env.VCAP_URL23711 || 'https://somesv23711.example.com/getData';
const EXT_SVCURL26919 = process.env.VCAP_URL26919 || 'https://somesv26919.example.com/getData';
const EXT_SVCURL32093 = process.env.VCAP_URL32093 || 'https://somesv32093.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8824</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
