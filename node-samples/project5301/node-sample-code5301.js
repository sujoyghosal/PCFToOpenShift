const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5301;
const EXT_SVCURL29272 = process.env.VCAP_URL29272 || 'https://somesv29272.example.com/getData';
const EXT_SVCURL17407 = process.env.VCAP_URL17407 || 'https://somesv17407.example.com/getData';
const EXT_SVCURL12281 = process.env.VCAP_URL12281 || 'https://somesv12281.example.com/getData';
const EXT_SVCURL22878 = process.env.VCAP_URL22878 || 'https://somesv22878.example.com/getData';
const EXT_SVCURL15989 = process.env.VCAP_URL15989 || 'https://somesv15989.example.com/getData';
const EXT_SVCURL25789 = process.env.VCAP_URL25789 || 'https://somesv25789.example.com/getData';
const EXT_SVCURL24608 = process.env.VCAP_URL24608 || 'https://somesv24608.example.com/getData';
const EXT_SVCURL21656 = process.env.VCAP_URL21656 || 'https://somesv21656.example.com/getData';
const EXT_SVCURL34655 = process.env.VCAP_URL34655 || 'https://somesv34655.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5301</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
