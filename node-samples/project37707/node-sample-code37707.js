const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 37707;
const EXT_SVCURL8816 = process.env.VCAP_URL8816 || 'https://somesv8816.example.com/getData';
const EXT_SVCURL26986 = process.env.VCAP_URL26986 || 'https://somesv26986.example.com/getData';
const EXT_SVCURL4509 = process.env.VCAP_URL4509 || 'https://somesv4509.example.com/getData';
const EXT_SVCURL18910 = process.env.VCAP_URL18910 || 'https://somesv18910.example.com/getData';
const EXT_SVCURL19619 = process.env.VCAP_URL19619 || 'https://somesv19619.example.com/getData';
const EXT_SVCURL6826 = process.env.VCAP_URL6826 || 'https://somesv6826.example.com/getData';
const EXT_SVCURL17727 = process.env.VCAP_URL17727 || 'https://somesv17727.example.com/getData';
const EXT_SVCURL21385 = process.env.VCAP_URL21385 || 'https://somesv21385.example.com/getData';
const EXT_SVCURL14302 = process.env.VCAP_URL14302 || 'https://somesv14302.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #37707</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));