const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15833;
const EXT_SVCURL23101 = process.env.VCAP_URL23101 || 'https://somesv23101.example.com/getData';
const EXT_SVCURL17885 = process.env.VCAP_URL17885 || 'https://somesv17885.example.com/getData';
const EXT_SVCURL23803 = process.env.VCAP_URL23803 || 'https://somesv23803.example.com/getData';
const EXT_SVCURL26754 = process.env.VCAP_URL26754 || 'https://somesv26754.example.com/getData';
const EXT_SVCURL32064 = process.env.VCAP_URL32064 || 'https://somesv32064.example.com/getData';
const EXT_SVCURL25933 = process.env.VCAP_URL25933 || 'https://somesv25933.example.com/getData';
const EXT_SVCURL33307 = process.env.VCAP_URL33307 || 'https://somesv33307.example.com/getData';
const EXT_SVCURL16533 = process.env.VCAP_URL16533 || 'https://somesv16533.example.com/getData';
const EXT_SVCURL14939 = process.env.VCAP_URL14939 || 'https://somesv14939.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15833</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
