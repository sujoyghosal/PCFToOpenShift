const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9301;
const EXT_SVCURL2218 = process.env.VCAP_URL2218 || 'https://somesv2218.example.com/getData';
const EXT_SVCURL10376 = process.env.VCAP_URL10376 || 'https://somesv10376.example.com/getData';
const EXT_SVCURL19183 = process.env.VCAP_URL19183 || 'https://somesv19183.example.com/getData';
const EXT_SVCURL20156 = process.env.VCAP_URL20156 || 'https://somesv20156.example.com/getData';
const EXT_SVCURL10868 = process.env.VCAP_URL10868 || 'https://somesv10868.example.com/getData';
const EXT_SVCURL8533 = process.env.VCAP_URL8533 || 'https://somesv8533.example.com/getData';
const EXT_SVCURL11170 = process.env.VCAP_URL11170 || 'https://somesv11170.example.com/getData';
const EXT_SVCURL8225 = process.env.VCAP_URL8225 || 'https://somesv8225.example.com/getData';
const EXT_SVCURL23669 = process.env.VCAP_URL23669 || 'https://somesv23669.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9301</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));