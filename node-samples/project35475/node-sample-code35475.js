const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35475;
const EXT_SVCURL8684 = process.env.VCAP_URL8684 || 'https://somesv8684.example.com/getData';
const EXT_SVCURL28368 = process.env.VCAP_URL28368 || 'https://somesv28368.example.com/getData';
const EXT_SVCURL19158 = process.env.VCAP_URL19158 || 'https://somesv19158.example.com/getData';
const EXT_SVCURL6722 = process.env.VCAP_URL6722 || 'https://somesv6722.example.com/getData';
const EXT_SVCURL26234 = process.env.VCAP_URL26234 || 'https://somesv26234.example.com/getData';
const EXT_SVCURL6757 = process.env.VCAP_URL6757 || 'https://somesv6757.example.com/getData';
const EXT_SVCURL21835 = process.env.VCAP_URL21835 || 'https://somesv21835.example.com/getData';
const EXT_SVCURL6062 = process.env.VCAP_URL6062 || 'https://somesv6062.example.com/getData';
const EXT_SVCURL17092 = process.env.VCAP_URL17092 || 'https://somesv17092.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35475</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
