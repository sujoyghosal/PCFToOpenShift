const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27748;
const EXT_SVCURL28462 = process.env.VCAP_URL28462 || 'https://somesv28462.example.com/getData';
const EXT_SVCURL25300 = process.env.VCAP_URL25300 || 'https://somesv25300.example.com/getData';
const EXT_SVCURL6841 = process.env.VCAP_URL6841 || 'https://somesv6841.example.com/getData';
const EXT_SVCURL31514 = process.env.VCAP_URL31514 || 'https://somesv31514.example.com/getData';
const EXT_SVCURL10360 = process.env.VCAP_URL10360 || 'https://somesv10360.example.com/getData';
const EXT_SVCURL22482 = process.env.VCAP_URL22482 || 'https://somesv22482.example.com/getData';
const EXT_SVCURL23572 = process.env.VCAP_URL23572 || 'https://somesv23572.example.com/getData';
const EXT_SVCURL19214 = process.env.VCAP_URL19214 || 'https://somesv19214.example.com/getData';
const EXT_SVCURL12084 = process.env.VCAP_URL12084 || 'https://somesv12084.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27748</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
