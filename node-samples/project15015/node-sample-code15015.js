const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15015;
const EXT_SVCURL29343 = process.env.VCAP_URL29343 || 'https://somesv29343.example.com/getData';
const EXT_SVCURL5299 = process.env.VCAP_URL5299 || 'https://somesv5299.example.com/getData';
const EXT_SVCURL28298 = process.env.VCAP_URL28298 || 'https://somesv28298.example.com/getData';
const EXT_SVCURL5338 = process.env.VCAP_URL5338 || 'https://somesv5338.example.com/getData';
const EXT_SVCURL9386 = process.env.VCAP_URL9386 || 'https://somesv9386.example.com/getData';
const EXT_SVCURL23984 = process.env.VCAP_URL23984 || 'https://somesv23984.example.com/getData';
const EXT_SVCURL33561 = process.env.VCAP_URL33561 || 'https://somesv33561.example.com/getData';
const EXT_SVCURL16260 = process.env.VCAP_URL16260 || 'https://somesv16260.example.com/getData';
const EXT_SVCURL6629 = process.env.VCAP_URL6629 || 'https://somesv6629.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15015</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
