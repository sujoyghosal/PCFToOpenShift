const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23926;
const EXT_SVCURL21004 = process.env.VCAP_URL21004 || 'https://somesv21004.example.com/getData';
const EXT_SVCURL24916 = process.env.VCAP_URL24916 || 'https://somesv24916.example.com/getData';
const EXT_SVCURL15264 = process.env.VCAP_URL15264 || 'https://somesv15264.example.com/getData';
const EXT_SVCURL33947 = process.env.VCAP_URL33947 || 'https://somesv33947.example.com/getData';
const EXT_SVCURL26200 = process.env.VCAP_URL26200 || 'https://somesv26200.example.com/getData';
const EXT_SVCURL22699 = process.env.VCAP_URL22699 || 'https://somesv22699.example.com/getData';
const EXT_SVCURL30290 = process.env.VCAP_URL30290 || 'https://somesv30290.example.com/getData';
const EXT_SVCURL26951 = process.env.VCAP_URL26951 || 'https://somesv26951.example.com/getData';
const EXT_SVCURL8992 = process.env.VCAP_URL8992 || 'https://somesv8992.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23926</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
