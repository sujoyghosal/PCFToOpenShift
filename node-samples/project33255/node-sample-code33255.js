const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33255;
const EXT_SVCURL10728 = process.env.VCAP_URL10728 || 'https://somesv10728.example.com/getData';
const EXT_SVCURL8466 = process.env.VCAP_URL8466 || 'https://somesv8466.example.com/getData';
const EXT_SVCURL17319 = process.env.VCAP_URL17319 || 'https://somesv17319.example.com/getData';
const EXT_SVCURL17302 = process.env.VCAP_URL17302 || 'https://somesv17302.example.com/getData';
const EXT_SVCURL20984 = process.env.VCAP_URL20984 || 'https://somesv20984.example.com/getData';
const EXT_SVCURL8243 = process.env.VCAP_URL8243 || 'https://somesv8243.example.com/getData';
const EXT_SVCURL16369 = process.env.VCAP_URL16369 || 'https://somesv16369.example.com/getData';
const EXT_SVCURL26315 = process.env.VCAP_URL26315 || 'https://somesv26315.example.com/getData';
const EXT_SVCURL23433 = process.env.VCAP_URL23433 || 'https://somesv23433.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33255</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
