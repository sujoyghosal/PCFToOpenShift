const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25630;
const EXT_SVCURL3974 = process.env.VCAP_URL3974 || 'https://somesv3974.example.com/getData';
const EXT_SVCURL12616 = process.env.VCAP_URL12616 || 'https://somesv12616.example.com/getData';
const EXT_SVCURL13758 = process.env.VCAP_URL13758 || 'https://somesv13758.example.com/getData';
const EXT_SVCURL25234 = process.env.VCAP_URL25234 || 'https://somesv25234.example.com/getData';
const EXT_SVCURL22328 = process.env.VCAP_URL22328 || 'https://somesv22328.example.com/getData';
const EXT_SVCURL13927 = process.env.VCAP_URL13927 || 'https://somesv13927.example.com/getData';
const EXT_SVCURL8128 = process.env.VCAP_URL8128 || 'https://somesv8128.example.com/getData';
const EXT_SVCURL20493 = process.env.VCAP_URL20493 || 'https://somesv20493.example.com/getData';
const EXT_SVCURL13231 = process.env.VCAP_URL13231 || 'https://somesv13231.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25630</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
