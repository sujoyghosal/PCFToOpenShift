const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 17015;
const EXT_SVCURL31563 = process.env.VCAP_URL31563 || 'https://somesv31563.example.com/getData';
const EXT_SVCURL18556 = process.env.VCAP_URL18556 || 'https://somesv18556.example.com/getData';
const EXT_SVCURL33530 = process.env.VCAP_URL33530 || 'https://somesv33530.example.com/getData';
const EXT_SVCURL25643 = process.env.VCAP_URL25643 || 'https://somesv25643.example.com/getData';
const EXT_SVCURL23679 = process.env.VCAP_URL23679 || 'https://somesv23679.example.com/getData';
const EXT_SVCURL26517 = process.env.VCAP_URL26517 || 'https://somesv26517.example.com/getData';
const EXT_SVCURL23176 = process.env.VCAP_URL23176 || 'https://somesv23176.example.com/getData';
const EXT_SVCURL28950 = process.env.VCAP_URL28950 || 'https://somesv28950.example.com/getData';
const EXT_SVCURL13200 = process.env.VCAP_URL13200 || 'https://somesv13200.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #17015</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));