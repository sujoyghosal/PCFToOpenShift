const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 36851;
const EXT_SVCURL27661 = process.env.VCAP_URL27661 || 'https://somesv27661.example.com/getData';
const EXT_SVCURL26595 = process.env.VCAP_URL26595 || 'https://somesv26595.example.com/getData';
const EXT_SVCURL22137 = process.env.VCAP_URL22137 || 'https://somesv22137.example.com/getData';
const EXT_SVCURL31133 = process.env.VCAP_URL31133 || 'https://somesv31133.example.com/getData';
const EXT_SVCURL10943 = process.env.VCAP_URL10943 || 'https://somesv10943.example.com/getData';
const EXT_SVCURL8535 = process.env.VCAP_URL8535 || 'https://somesv8535.example.com/getData';
const EXT_SVCURL11060 = process.env.VCAP_URL11060 || 'https://somesv11060.example.com/getData';
const EXT_SVCURL27688 = process.env.VCAP_URL27688 || 'https://somesv27688.example.com/getData';
const EXT_SVCURL23946 = process.env.VCAP_URL23946 || 'https://somesv23946.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36851</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));