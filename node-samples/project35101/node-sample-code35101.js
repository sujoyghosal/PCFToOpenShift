const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35101;
const EXT_SVCURL25214 = process.env.VCAP_URL25214 || 'https://somesv25214.example.com/getData';
const EXT_SVCURL2716 = process.env.VCAP_URL2716 || 'https://somesv2716.example.com/getData';
const EXT_SVCURL17196 = process.env.VCAP_URL17196 || 'https://somesv17196.example.com/getData';
const EXT_SVCURL6410 = process.env.VCAP_URL6410 || 'https://somesv6410.example.com/getData';
const EXT_SVCURL25387 = process.env.VCAP_URL25387 || 'https://somesv25387.example.com/getData';
const EXT_SVCURL22535 = process.env.VCAP_URL22535 || 'https://somesv22535.example.com/getData';
const EXT_SVCURL32545 = process.env.VCAP_URL32545 || 'https://somesv32545.example.com/getData';
const EXT_SVCURL3079 = process.env.VCAP_URL3079 || 'https://somesv3079.example.com/getData';
const EXT_SVCURL10190 = process.env.VCAP_URL10190 || 'https://somesv10190.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35101</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));