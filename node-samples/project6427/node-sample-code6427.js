const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6427;
const EXT_SVCURL10163 = process.env.VCAP_URL10163 || 'https://somesv10163.example.com/getData';
const EXT_SVCURL8476 = process.env.VCAP_URL8476 || 'https://somesv8476.example.com/getData';
const EXT_SVCURL34688 = process.env.VCAP_URL34688 || 'https://somesv34688.example.com/getData';
const EXT_SVCURL13980 = process.env.VCAP_URL13980 || 'https://somesv13980.example.com/getData';
const EXT_SVCURL11570 = process.env.VCAP_URL11570 || 'https://somesv11570.example.com/getData';
const EXT_SVCURL23344 = process.env.VCAP_URL23344 || 'https://somesv23344.example.com/getData';
const EXT_SVCURL31908 = process.env.VCAP_URL31908 || 'https://somesv31908.example.com/getData';
const EXT_SVCURL20821 = process.env.VCAP_URL20821 || 'https://somesv20821.example.com/getData';
const EXT_SVCURL2241 = process.env.VCAP_URL2241 || 'https://somesv2241.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6427</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));