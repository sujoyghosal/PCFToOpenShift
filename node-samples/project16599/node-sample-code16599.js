const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16599;
const EXT_SVCURL18313 = process.env.VCAP_URL18313 || 'https://somesv18313.example.com/getData';
const EXT_SVCURL13342 = process.env.VCAP_URL13342 || 'https://somesv13342.example.com/getData';
const EXT_SVCURL28781 = process.env.VCAP_URL28781 || 'https://somesv28781.example.com/getData';
const EXT_SVCURL22394 = process.env.VCAP_URL22394 || 'https://somesv22394.example.com/getData';
const EXT_SVCURL20949 = process.env.VCAP_URL20949 || 'https://somesv20949.example.com/getData';
const EXT_SVCURL12322 = process.env.VCAP_URL12322 || 'https://somesv12322.example.com/getData';
const EXT_SVCURL3709 = process.env.VCAP_URL3709 || 'https://somesv3709.example.com/getData';
const EXT_SVCURL22753 = process.env.VCAP_URL22753 || 'https://somesv22753.example.com/getData';
const EXT_SVCURL14143 = process.env.VCAP_URL14143 || 'https://somesv14143.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16599</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));