const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8112;
const EXT_SVCURL18514 = process.env.VCAP_URL18514 || 'https://somesv18514.example.com/getData';
const EXT_SVCURL28637 = process.env.VCAP_URL28637 || 'https://somesv28637.example.com/getData';
const EXT_SVCURL19702 = process.env.VCAP_URL19702 || 'https://somesv19702.example.com/getData';
const EXT_SVCURL23179 = process.env.VCAP_URL23179 || 'https://somesv23179.example.com/getData';
const EXT_SVCURL22420 = process.env.VCAP_URL22420 || 'https://somesv22420.example.com/getData';
const EXT_SVCURL2907 = process.env.VCAP_URL2907 || 'https://somesv2907.example.com/getData';
const EXT_SVCURL26685 = process.env.VCAP_URL26685 || 'https://somesv26685.example.com/getData';
const EXT_SVCURL20293 = process.env.VCAP_URL20293 || 'https://somesv20293.example.com/getData';
const EXT_SVCURL22823 = process.env.VCAP_URL22823 || 'https://somesv22823.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8112</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
