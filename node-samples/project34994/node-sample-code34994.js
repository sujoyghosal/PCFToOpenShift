const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34994;
const EXT_SVCURL14095 = process.env.VCAP_URL14095 || 'https://somesv14095.example.com/getData';
const EXT_SVCURL31044 = process.env.VCAP_URL31044 || 'https://somesv31044.example.com/getData';
const EXT_SVCURL18597 = process.env.VCAP_URL18597 || 'https://somesv18597.example.com/getData';
const EXT_SVCURL13960 = process.env.VCAP_URL13960 || 'https://somesv13960.example.com/getData';
const EXT_SVCURL9044 = process.env.VCAP_URL9044 || 'https://somesv9044.example.com/getData';
const EXT_SVCURL28021 = process.env.VCAP_URL28021 || 'https://somesv28021.example.com/getData';
const EXT_SVCURL12579 = process.env.VCAP_URL12579 || 'https://somesv12579.example.com/getData';
const EXT_SVCURL6107 = process.env.VCAP_URL6107 || 'https://somesv6107.example.com/getData';
const EXT_SVCURL5254 = process.env.VCAP_URL5254 || 'https://somesv5254.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34994</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));