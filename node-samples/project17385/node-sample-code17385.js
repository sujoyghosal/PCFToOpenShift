const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 17385;
const EXT_SVCURL17872 = process.env.VCAP_URL17872 || 'https://somesv17872.example.com/getData';
const EXT_SVCURL23124 = process.env.VCAP_URL23124 || 'https://somesv23124.example.com/getData';
const EXT_SVCURL5206 = process.env.VCAP_URL5206 || 'https://somesv5206.example.com/getData';
const EXT_SVCURL25238 = process.env.VCAP_URL25238 || 'https://somesv25238.example.com/getData';
const EXT_SVCURL4547 = process.env.VCAP_URL4547 || 'https://somesv4547.example.com/getData';
const EXT_SVCURL16135 = process.env.VCAP_URL16135 || 'https://somesv16135.example.com/getData';
const EXT_SVCURL16342 = process.env.VCAP_URL16342 || 'https://somesv16342.example.com/getData';
const EXT_SVCURL24413 = process.env.VCAP_URL24413 || 'https://somesv24413.example.com/getData';
const EXT_SVCURL31222 = process.env.VCAP_URL31222 || 'https://somesv31222.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #17385</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
