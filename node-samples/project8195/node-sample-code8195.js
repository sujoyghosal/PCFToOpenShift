const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8195;
const EXT_SVCURL20050 = process.env.VCAP_URL20050 || 'https://somesv20050.example.com/getData';
const EXT_SVCURL30570 = process.env.VCAP_URL30570 || 'https://somesv30570.example.com/getData';
const EXT_SVCURL10758 = process.env.VCAP_URL10758 || 'https://somesv10758.example.com/getData';
const EXT_SVCURL27479 = process.env.VCAP_URL27479 || 'https://somesv27479.example.com/getData';
const EXT_SVCURL29299 = process.env.VCAP_URL29299 || 'https://somesv29299.example.com/getData';
const EXT_SVCURL15472 = process.env.VCAP_URL15472 || 'https://somesv15472.example.com/getData';
const EXT_SVCURL10059 = process.env.VCAP_URL10059 || 'https://somesv10059.example.com/getData';
const EXT_SVCURL27588 = process.env.VCAP_URL27588 || 'https://somesv27588.example.com/getData';
const EXT_SVCURL23980 = process.env.VCAP_URL23980 || 'https://somesv23980.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8195</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));