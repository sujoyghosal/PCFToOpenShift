const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32379;
const EXT_SVCURL31972 = process.env.VCAP_URL31972 || 'https://somesv31972.example.com/getData';
const EXT_SVCURL2153 = process.env.VCAP_URL2153 || 'https://somesv2153.example.com/getData';
const EXT_SVCURL14916 = process.env.VCAP_URL14916 || 'https://somesv14916.example.com/getData';
const EXT_SVCURL22266 = process.env.VCAP_URL22266 || 'https://somesv22266.example.com/getData';
const EXT_SVCURL24914 = process.env.VCAP_URL24914 || 'https://somesv24914.example.com/getData';
const EXT_SVCURL29315 = process.env.VCAP_URL29315 || 'https://somesv29315.example.com/getData';
const EXT_SVCURL2513 = process.env.VCAP_URL2513 || 'https://somesv2513.example.com/getData';
const EXT_SVCURL19952 = process.env.VCAP_URL19952 || 'https://somesv19952.example.com/getData';
const EXT_SVCURL10486 = process.env.VCAP_URL10486 || 'https://somesv10486.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32379</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
