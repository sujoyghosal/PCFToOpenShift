const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5975;
const EXT_SVCURL32924 = process.env.VCAP_URL32924 || 'https://somesv32924.example.com/getData';
const EXT_SVCURL18258 = process.env.VCAP_URL18258 || 'https://somesv18258.example.com/getData';
const EXT_SVCURL19400 = process.env.VCAP_URL19400 || 'https://somesv19400.example.com/getData';
const EXT_SVCURL31476 = process.env.VCAP_URL31476 || 'https://somesv31476.example.com/getData';
const EXT_SVCURL12301 = process.env.VCAP_URL12301 || 'https://somesv12301.example.com/getData';
const EXT_SVCURL13792 = process.env.VCAP_URL13792 || 'https://somesv13792.example.com/getData';
const EXT_SVCURL32041 = process.env.VCAP_URL32041 || 'https://somesv32041.example.com/getData';
const EXT_SVCURL34224 = process.env.VCAP_URL34224 || 'https://somesv34224.example.com/getData';
const EXT_SVCURL3138 = process.env.VCAP_URL3138 || 'https://somesv3138.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5975</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
