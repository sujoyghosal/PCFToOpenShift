const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 37694;
const EXT_SVCURL14377 = process.env.VCAP_URL14377 || 'https://somesv14377.example.com/getData';
const EXT_SVCURL28026 = process.env.VCAP_URL28026 || 'https://somesv28026.example.com/getData';
const EXT_SVCURL34273 = process.env.VCAP_URL34273 || 'https://somesv34273.example.com/getData';
const EXT_SVCURL20056 = process.env.VCAP_URL20056 || 'https://somesv20056.example.com/getData';
const EXT_SVCURL24707 = process.env.VCAP_URL24707 || 'https://somesv24707.example.com/getData';
const EXT_SVCURL4135 = process.env.VCAP_URL4135 || 'https://somesv4135.example.com/getData';
const EXT_SVCURL32835 = process.env.VCAP_URL32835 || 'https://somesv32835.example.com/getData';
const EXT_SVCURL20340 = process.env.VCAP_URL20340 || 'https://somesv20340.example.com/getData';
const EXT_SVCURL19670 = process.env.VCAP_URL19670 || 'https://somesv19670.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #37694</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
