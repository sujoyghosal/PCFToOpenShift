const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15232;
const EXT_SVCURL26413 = process.env.VCAP_URL26413 || 'https://somesv26413.example.com/getData';
const EXT_SVCURL34446 = process.env.VCAP_URL34446 || 'https://somesv34446.example.com/getData';
const EXT_SVCURL33656 = process.env.VCAP_URL33656 || 'https://somesv33656.example.com/getData';
const EXT_SVCURL8944 = process.env.VCAP_URL8944 || 'https://somesv8944.example.com/getData';
const EXT_SVCURL32870 = process.env.VCAP_URL32870 || 'https://somesv32870.example.com/getData';
const EXT_SVCURL7721 = process.env.VCAP_URL7721 || 'https://somesv7721.example.com/getData';
const EXT_SVCURL4663 = process.env.VCAP_URL4663 || 'https://somesv4663.example.com/getData';
const EXT_SVCURL17398 = process.env.VCAP_URL17398 || 'https://somesv17398.example.com/getData';
const EXT_SVCURL30920 = process.env.VCAP_URL30920 || 'https://somesv30920.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15232</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
