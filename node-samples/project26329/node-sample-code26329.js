const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26329;
const EXT_SVCURL22094 = process.env.VCAP_URL22094 || 'https://somesv22094.example.com/getData';
const EXT_SVCURL15567 = process.env.VCAP_URL15567 || 'https://somesv15567.example.com/getData';
const EXT_SVCURL21741 = process.env.VCAP_URL21741 || 'https://somesv21741.example.com/getData';
const EXT_SVCURL2678 = process.env.VCAP_URL2678 || 'https://somesv2678.example.com/getData';
const EXT_SVCURL7641 = process.env.VCAP_URL7641 || 'https://somesv7641.example.com/getData';
const EXT_SVCURL8814 = process.env.VCAP_URL8814 || 'https://somesv8814.example.com/getData';
const EXT_SVCURL20000 = process.env.VCAP_URL20000 || 'https://somesv20000.example.com/getData';
const EXT_SVCURL2580 = process.env.VCAP_URL2580 || 'https://somesv2580.example.com/getData';
const EXT_SVCURL22600 = process.env.VCAP_URL22600 || 'https://somesv22600.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26329</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
