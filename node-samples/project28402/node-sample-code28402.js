const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28402;
const EXT_SVCURL5192 = process.env.VCAP_URL5192 || 'https://somesv5192.example.com/getData';
const EXT_SVCURL29413 = process.env.VCAP_URL29413 || 'https://somesv29413.example.com/getData';
const EXT_SVCURL21507 = process.env.VCAP_URL21507 || 'https://somesv21507.example.com/getData';
const EXT_SVCURL19181 = process.env.VCAP_URL19181 || 'https://somesv19181.example.com/getData';
const EXT_SVCURL31690 = process.env.VCAP_URL31690 || 'https://somesv31690.example.com/getData';
const EXT_SVCURL19002 = process.env.VCAP_URL19002 || 'https://somesv19002.example.com/getData';
const EXT_SVCURL27732 = process.env.VCAP_URL27732 || 'https://somesv27732.example.com/getData';
const EXT_SVCURL28464 = process.env.VCAP_URL28464 || 'https://somesv28464.example.com/getData';
const EXT_SVCURL29108 = process.env.VCAP_URL29108 || 'https://somesv29108.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28402</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
