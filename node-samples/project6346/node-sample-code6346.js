const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6346;
const EXT_SVCURL28704 = process.env.VCAP_URL28704 || 'https://somesv28704.example.com/getData';
const EXT_SVCURL12117 = process.env.VCAP_URL12117 || 'https://somesv12117.example.com/getData';
const EXT_SVCURL24665 = process.env.VCAP_URL24665 || 'https://somesv24665.example.com/getData';
const EXT_SVCURL23749 = process.env.VCAP_URL23749 || 'https://somesv23749.example.com/getData';
const EXT_SVCURL32978 = process.env.VCAP_URL32978 || 'https://somesv32978.example.com/getData';
const EXT_SVCURL6727 = process.env.VCAP_URL6727 || 'https://somesv6727.example.com/getData';
const EXT_SVCURL18915 = process.env.VCAP_URL18915 || 'https://somesv18915.example.com/getData';
const EXT_SVCURL23163 = process.env.VCAP_URL23163 || 'https://somesv23163.example.com/getData';
const EXT_SVCURL7832 = process.env.VCAP_URL7832 || 'https://somesv7832.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6346</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
