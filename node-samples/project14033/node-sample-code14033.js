const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14033;
const EXT_SVCURL28768 = process.env.VCAP_URL28768 || 'https://somesv28768.example.com/getData';
const EXT_SVCURL32928 = process.env.VCAP_URL32928 || 'https://somesv32928.example.com/getData';
const EXT_SVCURL33803 = process.env.VCAP_URL33803 || 'https://somesv33803.example.com/getData';
const EXT_SVCURL16126 = process.env.VCAP_URL16126 || 'https://somesv16126.example.com/getData';
const EXT_SVCURL28090 = process.env.VCAP_URL28090 || 'https://somesv28090.example.com/getData';
const EXT_SVCURL6356 = process.env.VCAP_URL6356 || 'https://somesv6356.example.com/getData';
const EXT_SVCURL19416 = process.env.VCAP_URL19416 || 'https://somesv19416.example.com/getData';
const EXT_SVCURL29178 = process.env.VCAP_URL29178 || 'https://somesv29178.example.com/getData';
const EXT_SVCURL6963 = process.env.VCAP_URL6963 || 'https://somesv6963.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14033</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));