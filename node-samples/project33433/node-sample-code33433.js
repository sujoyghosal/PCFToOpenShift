const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33433;
const EXT_SVCURL17554 = process.env.VCAP_URL17554 || 'https://somesv17554.example.com/getData';
const EXT_SVCURL11991 = process.env.VCAP_URL11991 || 'https://somesv11991.example.com/getData';
const EXT_SVCURL18862 = process.env.VCAP_URL18862 || 'https://somesv18862.example.com/getData';
const EXT_SVCURL20341 = process.env.VCAP_URL20341 || 'https://somesv20341.example.com/getData';
const EXT_SVCURL22565 = process.env.VCAP_URL22565 || 'https://somesv22565.example.com/getData';
const EXT_SVCURL12355 = process.env.VCAP_URL12355 || 'https://somesv12355.example.com/getData';
const EXT_SVCURL15639 = process.env.VCAP_URL15639 || 'https://somesv15639.example.com/getData';
const EXT_SVCURL28575 = process.env.VCAP_URL28575 || 'https://somesv28575.example.com/getData';
const EXT_SVCURL30640 = process.env.VCAP_URL30640 || 'https://somesv30640.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33433</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
