const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14982;
const EXT_SVCURL5491 = process.env.VCAP_URL5491 || 'https://somesv5491.example.com/getData';
const EXT_SVCURL13384 = process.env.VCAP_URL13384 || 'https://somesv13384.example.com/getData';
const EXT_SVCURL28170 = process.env.VCAP_URL28170 || 'https://somesv28170.example.com/getData';
const EXT_SVCURL32535 = process.env.VCAP_URL32535 || 'https://somesv32535.example.com/getData';
const EXT_SVCURL29892 = process.env.VCAP_URL29892 || 'https://somesv29892.example.com/getData';
const EXT_SVCURL12604 = process.env.VCAP_URL12604 || 'https://somesv12604.example.com/getData';
const EXT_SVCURL33005 = process.env.VCAP_URL33005 || 'https://somesv33005.example.com/getData';
const EXT_SVCURL17159 = process.env.VCAP_URL17159 || 'https://somesv17159.example.com/getData';
const EXT_SVCURL13041 = process.env.VCAP_URL13041 || 'https://somesv13041.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14982</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
