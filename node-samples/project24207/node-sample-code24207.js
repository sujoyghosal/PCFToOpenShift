const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24207;
const EXT_SVCURL22453 = process.env.VCAP_URL22453 || 'https://somesv22453.example.com/getData';
const EXT_SVCURL23620 = process.env.VCAP_URL23620 || 'https://somesv23620.example.com/getData';
const EXT_SVCURL14671 = process.env.VCAP_URL14671 || 'https://somesv14671.example.com/getData';
const EXT_SVCURL16708 = process.env.VCAP_URL16708 || 'https://somesv16708.example.com/getData';
const EXT_SVCURL2425 = process.env.VCAP_URL2425 || 'https://somesv2425.example.com/getData';
const EXT_SVCURL29554 = process.env.VCAP_URL29554 || 'https://somesv29554.example.com/getData';
const EXT_SVCURL21016 = process.env.VCAP_URL21016 || 'https://somesv21016.example.com/getData';
const EXT_SVCURL30284 = process.env.VCAP_URL30284 || 'https://somesv30284.example.com/getData';
const EXT_SVCURL16222 = process.env.VCAP_URL16222 || 'https://somesv16222.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24207</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
