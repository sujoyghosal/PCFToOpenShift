const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33204;
const EXT_SVCURL4158 = process.env.VCAP_URL4158 || 'https://somesv4158.example.com/getData';
const EXT_SVCURL8599 = process.env.VCAP_URL8599 || 'https://somesv8599.example.com/getData';
const EXT_SVCURL10396 = process.env.VCAP_URL10396 || 'https://somesv10396.example.com/getData';
const EXT_SVCURL25902 = process.env.VCAP_URL25902 || 'https://somesv25902.example.com/getData';
const EXT_SVCURL3031 = process.env.VCAP_URL3031 || 'https://somesv3031.example.com/getData';
const EXT_SVCURL20341 = process.env.VCAP_URL20341 || 'https://somesv20341.example.com/getData';
const EXT_SVCURL2949 = process.env.VCAP_URL2949 || 'https://somesv2949.example.com/getData';
const EXT_SVCURL6298 = process.env.VCAP_URL6298 || 'https://somesv6298.example.com/getData';
const EXT_SVCURL8090 = process.env.VCAP_URL8090 || 'https://somesv8090.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33204</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));