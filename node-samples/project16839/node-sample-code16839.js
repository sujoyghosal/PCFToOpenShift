const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16839;
const EXT_SVCURL30433 = process.env.VCAP_URL30433 || 'https://somesv30433.example.com/getData';
const EXT_SVCURL32363 = process.env.VCAP_URL32363 || 'https://somesv32363.example.com/getData';
const EXT_SVCURL12750 = process.env.VCAP_URL12750 || 'https://somesv12750.example.com/getData';
const EXT_SVCURL8903 = process.env.VCAP_URL8903 || 'https://somesv8903.example.com/getData';
const EXT_SVCURL13433 = process.env.VCAP_URL13433 || 'https://somesv13433.example.com/getData';
const EXT_SVCURL2919 = process.env.VCAP_URL2919 || 'https://somesv2919.example.com/getData';
const EXT_SVCURL31006 = process.env.VCAP_URL31006 || 'https://somesv31006.example.com/getData';
const EXT_SVCURL27265 = process.env.VCAP_URL27265 || 'https://somesv27265.example.com/getData';
const EXT_SVCURL15935 = process.env.VCAP_URL15935 || 'https://somesv15935.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16839</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
