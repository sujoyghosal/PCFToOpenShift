const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14489;
const EXT_SVCURL26497 = process.env.VCAP_URL26497 || 'https://somesv26497.example.com/getData';
const EXT_SVCURL30170 = process.env.VCAP_URL30170 || 'https://somesv30170.example.com/getData';
const EXT_SVCURL14724 = process.env.VCAP_URL14724 || 'https://somesv14724.example.com/getData';
const EXT_SVCURL33863 = process.env.VCAP_URL33863 || 'https://somesv33863.example.com/getData';
const EXT_SVCURL6694 = process.env.VCAP_URL6694 || 'https://somesv6694.example.com/getData';
const EXT_SVCURL12830 = process.env.VCAP_URL12830 || 'https://somesv12830.example.com/getData';
const EXT_SVCURL27581 = process.env.VCAP_URL27581 || 'https://somesv27581.example.com/getData';
const EXT_SVCURL10200 = process.env.VCAP_URL10200 || 'https://somesv10200.example.com/getData';
const EXT_SVCURL3292 = process.env.VCAP_URL3292 || 'https://somesv3292.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14489</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));