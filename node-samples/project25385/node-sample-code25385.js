const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25385;
const EXT_SVCURL19464 = process.env.VCAP_URL19464 || 'https://somesv19464.example.com/getData';
const EXT_SVCURL21897 = process.env.VCAP_URL21897 || 'https://somesv21897.example.com/getData';
const EXT_SVCURL22004 = process.env.VCAP_URL22004 || 'https://somesv22004.example.com/getData';
const EXT_SVCURL28475 = process.env.VCAP_URL28475 || 'https://somesv28475.example.com/getData';
const EXT_SVCURL10543 = process.env.VCAP_URL10543 || 'https://somesv10543.example.com/getData';
const EXT_SVCURL10798 = process.env.VCAP_URL10798 || 'https://somesv10798.example.com/getData';
const EXT_SVCURL2357 = process.env.VCAP_URL2357 || 'https://somesv2357.example.com/getData';
const EXT_SVCURL18240 = process.env.VCAP_URL18240 || 'https://somesv18240.example.com/getData';
const EXT_SVCURL22117 = process.env.VCAP_URL22117 || 'https://somesv22117.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25385</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));