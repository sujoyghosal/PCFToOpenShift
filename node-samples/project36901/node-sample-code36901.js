const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 36901;
const EXT_SVCURL3113 = process.env.VCAP_URL3113 || 'https://somesv3113.example.com/getData';
const EXT_SVCURL31279 = process.env.VCAP_URL31279 || 'https://somesv31279.example.com/getData';
const EXT_SVCURL26223 = process.env.VCAP_URL26223 || 'https://somesv26223.example.com/getData';
const EXT_SVCURL8645 = process.env.VCAP_URL8645 || 'https://somesv8645.example.com/getData';
const EXT_SVCURL19629 = process.env.VCAP_URL19629 || 'https://somesv19629.example.com/getData';
const EXT_SVCURL27368 = process.env.VCAP_URL27368 || 'https://somesv27368.example.com/getData';
const EXT_SVCURL8302 = process.env.VCAP_URL8302 || 'https://somesv8302.example.com/getData';
const EXT_SVCURL20130 = process.env.VCAP_URL20130 || 'https://somesv20130.example.com/getData';
const EXT_SVCURL27572 = process.env.VCAP_URL27572 || 'https://somesv27572.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36901</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
