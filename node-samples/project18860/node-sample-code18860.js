const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18860;
const EXT_SVCURL33261 = process.env.VCAP_URL33261 || 'https://somesv33261.example.com/getData';
const EXT_SVCURL5561 = process.env.VCAP_URL5561 || 'https://somesv5561.example.com/getData';
const EXT_SVCURL6851 = process.env.VCAP_URL6851 || 'https://somesv6851.example.com/getData';
const EXT_SVCURL33471 = process.env.VCAP_URL33471 || 'https://somesv33471.example.com/getData';
const EXT_SVCURL16446 = process.env.VCAP_URL16446 || 'https://somesv16446.example.com/getData';
const EXT_SVCURL29122 = process.env.VCAP_URL29122 || 'https://somesv29122.example.com/getData';
const EXT_SVCURL23828 = process.env.VCAP_URL23828 || 'https://somesv23828.example.com/getData';
const EXT_SVCURL6573 = process.env.VCAP_URL6573 || 'https://somesv6573.example.com/getData';
const EXT_SVCURL28212 = process.env.VCAP_URL28212 || 'https://somesv28212.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18860</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));