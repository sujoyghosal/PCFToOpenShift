const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26017;
const EXT_SVCURL14101 = process.env.VCAP_URL14101 || 'https://somesv14101.example.com/getData';
const EXT_SVCURL2333 = process.env.VCAP_URL2333 || 'https://somesv2333.example.com/getData';
const EXT_SVCURL14867 = process.env.VCAP_URL14867 || 'https://somesv14867.example.com/getData';
const EXT_SVCURL28912 = process.env.VCAP_URL28912 || 'https://somesv28912.example.com/getData';
const EXT_SVCURL23812 = process.env.VCAP_URL23812 || 'https://somesv23812.example.com/getData';
const EXT_SVCURL20729 = process.env.VCAP_URL20729 || 'https://somesv20729.example.com/getData';
const EXT_SVCURL4027 = process.env.VCAP_URL4027 || 'https://somesv4027.example.com/getData';
const EXT_SVCURL8011 = process.env.VCAP_URL8011 || 'https://somesv8011.example.com/getData';
const EXT_SVCURL27278 = process.env.VCAP_URL27278 || 'https://somesv27278.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26017</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
