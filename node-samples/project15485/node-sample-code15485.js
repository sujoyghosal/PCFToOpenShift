const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15485;
const EXT_SVCURL32295 = process.env.VCAP_URL32295 || 'https://somesv32295.example.com/getData';
const EXT_SVCURL20633 = process.env.VCAP_URL20633 || 'https://somesv20633.example.com/getData';
const EXT_SVCURL16934 = process.env.VCAP_URL16934 || 'https://somesv16934.example.com/getData';
const EXT_SVCURL18024 = process.env.VCAP_URL18024 || 'https://somesv18024.example.com/getData';
const EXT_SVCURL25206 = process.env.VCAP_URL25206 || 'https://somesv25206.example.com/getData';
const EXT_SVCURL33878 = process.env.VCAP_URL33878 || 'https://somesv33878.example.com/getData';
const EXT_SVCURL28524 = process.env.VCAP_URL28524 || 'https://somesv28524.example.com/getData';
const EXT_SVCURL24659 = process.env.VCAP_URL24659 || 'https://somesv24659.example.com/getData';
const EXT_SVCURL20875 = process.env.VCAP_URL20875 || 'https://somesv20875.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15485</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));