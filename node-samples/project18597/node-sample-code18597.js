const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18597;
const EXT_SVCURL22888 = process.env.VCAP_URL22888 || 'https://somesv22888.example.com/getData';
const EXT_SVCURL21757 = process.env.VCAP_URL21757 || 'https://somesv21757.example.com/getData';
const EXT_SVCURL6758 = process.env.VCAP_URL6758 || 'https://somesv6758.example.com/getData';
const EXT_SVCURL6731 = process.env.VCAP_URL6731 || 'https://somesv6731.example.com/getData';
const EXT_SVCURL32495 = process.env.VCAP_URL32495 || 'https://somesv32495.example.com/getData';
const EXT_SVCURL6251 = process.env.VCAP_URL6251 || 'https://somesv6251.example.com/getData';
const EXT_SVCURL34121 = process.env.VCAP_URL34121 || 'https://somesv34121.example.com/getData';
const EXT_SVCURL34375 = process.env.VCAP_URL34375 || 'https://somesv34375.example.com/getData';
const EXT_SVCURL28592 = process.env.VCAP_URL28592 || 'https://somesv28592.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18597</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));