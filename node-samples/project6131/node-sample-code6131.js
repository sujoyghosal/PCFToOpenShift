const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6131;
const EXT_SVCURL28683 = process.env.VCAP_URL28683 || 'https://somesv28683.example.com/getData';
const EXT_SVCURL20384 = process.env.VCAP_URL20384 || 'https://somesv20384.example.com/getData';
const EXT_SVCURL21052 = process.env.VCAP_URL21052 || 'https://somesv21052.example.com/getData';
const EXT_SVCURL10190 = process.env.VCAP_URL10190 || 'https://somesv10190.example.com/getData';
const EXT_SVCURL8241 = process.env.VCAP_URL8241 || 'https://somesv8241.example.com/getData';
const EXT_SVCURL21047 = process.env.VCAP_URL21047 || 'https://somesv21047.example.com/getData';
const EXT_SVCURL20783 = process.env.VCAP_URL20783 || 'https://somesv20783.example.com/getData';
const EXT_SVCURL27431 = process.env.VCAP_URL27431 || 'https://somesv27431.example.com/getData';
const EXT_SVCURL6259 = process.env.VCAP_URL6259 || 'https://somesv6259.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6131</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
