const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7440;
const EXT_SVCURL5705 = process.env.VCAP_URL5705 || 'https://somesv5705.example.com/getData';
const EXT_SVCURL19624 = process.env.VCAP_URL19624 || 'https://somesv19624.example.com/getData';
const EXT_SVCURL31203 = process.env.VCAP_URL31203 || 'https://somesv31203.example.com/getData';
const EXT_SVCURL20598 = process.env.VCAP_URL20598 || 'https://somesv20598.example.com/getData';
const EXT_SVCURL19835 = process.env.VCAP_URL19835 || 'https://somesv19835.example.com/getData';
const EXT_SVCURL28189 = process.env.VCAP_URL28189 || 'https://somesv28189.example.com/getData';
const EXT_SVCURL3242 = process.env.VCAP_URL3242 || 'https://somesv3242.example.com/getData';
const EXT_SVCURL3415 = process.env.VCAP_URL3415 || 'https://somesv3415.example.com/getData';
const EXT_SVCURL21646 = process.env.VCAP_URL21646 || 'https://somesv21646.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7440</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));