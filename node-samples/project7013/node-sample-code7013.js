const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7013;
const EXT_SVCURL31542 = process.env.VCAP_URL31542 || 'https://somesv31542.example.com/getData';
const EXT_SVCURL13687 = process.env.VCAP_URL13687 || 'https://somesv13687.example.com/getData';
const EXT_SVCURL18000 = process.env.VCAP_URL18000 || 'https://somesv18000.example.com/getData';
const EXT_SVCURL5339 = process.env.VCAP_URL5339 || 'https://somesv5339.example.com/getData';
const EXT_SVCURL10200 = process.env.VCAP_URL10200 || 'https://somesv10200.example.com/getData';
const EXT_SVCURL14461 = process.env.VCAP_URL14461 || 'https://somesv14461.example.com/getData';
const EXT_SVCURL20532 = process.env.VCAP_URL20532 || 'https://somesv20532.example.com/getData';
const EXT_SVCURL26723 = process.env.VCAP_URL26723 || 'https://somesv26723.example.com/getData';
const EXT_SVCURL15796 = process.env.VCAP_URL15796 || 'https://somesv15796.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7013</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));