const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18269;
const EXT_SVCURL20215 = process.env.VCAP_URL20215 || 'https://somesv20215.example.com/getData';
const EXT_SVCURL3080 = process.env.VCAP_URL3080 || 'https://somesv3080.example.com/getData';
const EXT_SVCURL33772 = process.env.VCAP_URL33772 || 'https://somesv33772.example.com/getData';
const EXT_SVCURL11406 = process.env.VCAP_URL11406 || 'https://somesv11406.example.com/getData';
const EXT_SVCURL14911 = process.env.VCAP_URL14911 || 'https://somesv14911.example.com/getData';
const EXT_SVCURL31952 = process.env.VCAP_URL31952 || 'https://somesv31952.example.com/getData';
const EXT_SVCURL13335 = process.env.VCAP_URL13335 || 'https://somesv13335.example.com/getData';
const EXT_SVCURL14910 = process.env.VCAP_URL14910 || 'https://somesv14910.example.com/getData';
const EXT_SVCURL16291 = process.env.VCAP_URL16291 || 'https://somesv16291.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18269</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));