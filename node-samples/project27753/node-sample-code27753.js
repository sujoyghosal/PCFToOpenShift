const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27753;
const EXT_SVCURL7424 = process.env.VCAP_URL7424 || 'https://somesv7424.example.com/getData';
const EXT_SVCURL7681 = process.env.VCAP_URL7681 || 'https://somesv7681.example.com/getData';
const EXT_SVCURL26706 = process.env.VCAP_URL26706 || 'https://somesv26706.example.com/getData';
const EXT_SVCURL24435 = process.env.VCAP_URL24435 || 'https://somesv24435.example.com/getData';
const EXT_SVCURL11404 = process.env.VCAP_URL11404 || 'https://somesv11404.example.com/getData';
const EXT_SVCURL20063 = process.env.VCAP_URL20063 || 'https://somesv20063.example.com/getData';
const EXT_SVCURL17194 = process.env.VCAP_URL17194 || 'https://somesv17194.example.com/getData';
const EXT_SVCURL12507 = process.env.VCAP_URL12507 || 'https://somesv12507.example.com/getData';
const EXT_SVCURL24510 = process.env.VCAP_URL24510 || 'https://somesv24510.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27753</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));