const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18700;
const EXT_SVCURL27790 = process.env.VCAP_URL27790 || 'https://somesv27790.example.com/getData';
const EXT_SVCURL30820 = process.env.VCAP_URL30820 || 'https://somesv30820.example.com/getData';
const EXT_SVCURL25388 = process.env.VCAP_URL25388 || 'https://somesv25388.example.com/getData';
const EXT_SVCURL19031 = process.env.VCAP_URL19031 || 'https://somesv19031.example.com/getData';
const EXT_SVCURL9150 = process.env.VCAP_URL9150 || 'https://somesv9150.example.com/getData';
const EXT_SVCURL33470 = process.env.VCAP_URL33470 || 'https://somesv33470.example.com/getData';
const EXT_SVCURL6279 = process.env.VCAP_URL6279 || 'https://somesv6279.example.com/getData';
const EXT_SVCURL9705 = process.env.VCAP_URL9705 || 'https://somesv9705.example.com/getData';
const EXT_SVCURL16455 = process.env.VCAP_URL16455 || 'https://somesv16455.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18700</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
