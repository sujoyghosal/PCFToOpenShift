const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32688;
const EXT_SVCURL5656 = process.env.VCAP_URL5656 || 'https://somesv5656.example.com/getData';
const EXT_SVCURL33103 = process.env.VCAP_URL33103 || 'https://somesv33103.example.com/getData';
const EXT_SVCURL27564 = process.env.VCAP_URL27564 || 'https://somesv27564.example.com/getData';
const EXT_SVCURL25565 = process.env.VCAP_URL25565 || 'https://somesv25565.example.com/getData';
const EXT_SVCURL18640 = process.env.VCAP_URL18640 || 'https://somesv18640.example.com/getData';
const EXT_SVCURL20787 = process.env.VCAP_URL20787 || 'https://somesv20787.example.com/getData';
const EXT_SVCURL8642 = process.env.VCAP_URL8642 || 'https://somesv8642.example.com/getData';
const EXT_SVCURL10550 = process.env.VCAP_URL10550 || 'https://somesv10550.example.com/getData';
const EXT_SVCURL25104 = process.env.VCAP_URL25104 || 'https://somesv25104.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32688</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));