const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6023;
const EXT_SVCURL28894 = process.env.VCAP_URL28894 || 'https://somesv28894.example.com/getData';
const EXT_SVCURL31695 = process.env.VCAP_URL31695 || 'https://somesv31695.example.com/getData';
const EXT_SVCURL31494 = process.env.VCAP_URL31494 || 'https://somesv31494.example.com/getData';
const EXT_SVCURL4463 = process.env.VCAP_URL4463 || 'https://somesv4463.example.com/getData';
const EXT_SVCURL31109 = process.env.VCAP_URL31109 || 'https://somesv31109.example.com/getData';
const EXT_SVCURL4342 = process.env.VCAP_URL4342 || 'https://somesv4342.example.com/getData';
const EXT_SVCURL9976 = process.env.VCAP_URL9976 || 'https://somesv9976.example.com/getData';
const EXT_SVCURL20730 = process.env.VCAP_URL20730 || 'https://somesv20730.example.com/getData';
const EXT_SVCURL3994 = process.env.VCAP_URL3994 || 'https://somesv3994.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6023</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
