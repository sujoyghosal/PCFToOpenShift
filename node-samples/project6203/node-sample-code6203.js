const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6203;
const EXT_SVCURL2858 = process.env.VCAP_URL2858 || 'https://somesv2858.example.com/getData';
const EXT_SVCURL5129 = process.env.VCAP_URL5129 || 'https://somesv5129.example.com/getData';
const EXT_SVCURL20760 = process.env.VCAP_URL20760 || 'https://somesv20760.example.com/getData';
const EXT_SVCURL19249 = process.env.VCAP_URL19249 || 'https://somesv19249.example.com/getData';
const EXT_SVCURL23034 = process.env.VCAP_URL23034 || 'https://somesv23034.example.com/getData';
const EXT_SVCURL19316 = process.env.VCAP_URL19316 || 'https://somesv19316.example.com/getData';
const EXT_SVCURL8009 = process.env.VCAP_URL8009 || 'https://somesv8009.example.com/getData';
const EXT_SVCURL17203 = process.env.VCAP_URL17203 || 'https://somesv17203.example.com/getData';
const EXT_SVCURL17496 = process.env.VCAP_URL17496 || 'https://somesv17496.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6203</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
