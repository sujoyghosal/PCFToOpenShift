const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16111;
const EXT_SVCURL20231 = process.env.VCAP_URL20231 || 'https://somesv20231.example.com/getData';
const EXT_SVCURL21554 = process.env.VCAP_URL21554 || 'https://somesv21554.example.com/getData';
const EXT_SVCURL20190 = process.env.VCAP_URL20190 || 'https://somesv20190.example.com/getData';
const EXT_SVCURL21166 = process.env.VCAP_URL21166 || 'https://somesv21166.example.com/getData';
const EXT_SVCURL14131 = process.env.VCAP_URL14131 || 'https://somesv14131.example.com/getData';
const EXT_SVCURL15841 = process.env.VCAP_URL15841 || 'https://somesv15841.example.com/getData';
const EXT_SVCURL20846 = process.env.VCAP_URL20846 || 'https://somesv20846.example.com/getData';
const EXT_SVCURL2387 = process.env.VCAP_URL2387 || 'https://somesv2387.example.com/getData';
const EXT_SVCURL28649 = process.env.VCAP_URL28649 || 'https://somesv28649.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16111</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
