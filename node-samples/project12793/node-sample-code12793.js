const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12793;
const EXT_SVCURL3329 = process.env.VCAP_URL3329 || 'https://somesv3329.example.com/getData';
const EXT_SVCURL32021 = process.env.VCAP_URL32021 || 'https://somesv32021.example.com/getData';
const EXT_SVCURL34269 = process.env.VCAP_URL34269 || 'https://somesv34269.example.com/getData';
const EXT_SVCURL3837 = process.env.VCAP_URL3837 || 'https://somesv3837.example.com/getData';
const EXT_SVCURL2287 = process.env.VCAP_URL2287 || 'https://somesv2287.example.com/getData';
const EXT_SVCURL20605 = process.env.VCAP_URL20605 || 'https://somesv20605.example.com/getData';
const EXT_SVCURL27434 = process.env.VCAP_URL27434 || 'https://somesv27434.example.com/getData';
const EXT_SVCURL12129 = process.env.VCAP_URL12129 || 'https://somesv12129.example.com/getData';
const EXT_SVCURL6184 = process.env.VCAP_URL6184 || 'https://somesv6184.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12793</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));