const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34445;
const EXT_SVCURL8411 = process.env.VCAP_URL8411 || 'https://somesv8411.example.com/getData';
const EXT_SVCURL16681 = process.env.VCAP_URL16681 || 'https://somesv16681.example.com/getData';
const EXT_SVCURL15169 = process.env.VCAP_URL15169 || 'https://somesv15169.example.com/getData';
const EXT_SVCURL15121 = process.env.VCAP_URL15121 || 'https://somesv15121.example.com/getData';
const EXT_SVCURL23666 = process.env.VCAP_URL23666 || 'https://somesv23666.example.com/getData';
const EXT_SVCURL3094 = process.env.VCAP_URL3094 || 'https://somesv3094.example.com/getData';
const EXT_SVCURL20741 = process.env.VCAP_URL20741 || 'https://somesv20741.example.com/getData';
const EXT_SVCURL13291 = process.env.VCAP_URL13291 || 'https://somesv13291.example.com/getData';
const EXT_SVCURL22526 = process.env.VCAP_URL22526 || 'https://somesv22526.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34445</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
