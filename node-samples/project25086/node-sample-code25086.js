const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25086;
const EXT_SVCURL28702 = process.env.VCAP_URL28702 || 'https://somesv28702.example.com/getData';
const EXT_SVCURL10330 = process.env.VCAP_URL10330 || 'https://somesv10330.example.com/getData';
const EXT_SVCURL17222 = process.env.VCAP_URL17222 || 'https://somesv17222.example.com/getData';
const EXT_SVCURL13018 = process.env.VCAP_URL13018 || 'https://somesv13018.example.com/getData';
const EXT_SVCURL24759 = process.env.VCAP_URL24759 || 'https://somesv24759.example.com/getData';
const EXT_SVCURL11551 = process.env.VCAP_URL11551 || 'https://somesv11551.example.com/getData';
const EXT_SVCURL20001 = process.env.VCAP_URL20001 || 'https://somesv20001.example.com/getData';
const EXT_SVCURL18415 = process.env.VCAP_URL18415 || 'https://somesv18415.example.com/getData';
const EXT_SVCURL28030 = process.env.VCAP_URL28030 || 'https://somesv28030.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25086</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));