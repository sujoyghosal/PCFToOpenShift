const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32613;
const EXT_SVCURL18477 = process.env.VCAP_URL18477 || 'https://somesv18477.example.com/getData';
const EXT_SVCURL22003 = process.env.VCAP_URL22003 || 'https://somesv22003.example.com/getData';
const EXT_SVCURL24958 = process.env.VCAP_URL24958 || 'https://somesv24958.example.com/getData';
const EXT_SVCURL9654 = process.env.VCAP_URL9654 || 'https://somesv9654.example.com/getData';
const EXT_SVCURL25088 = process.env.VCAP_URL25088 || 'https://somesv25088.example.com/getData';
const EXT_SVCURL25318 = process.env.VCAP_URL25318 || 'https://somesv25318.example.com/getData';
const EXT_SVCURL34616 = process.env.VCAP_URL34616 || 'https://somesv34616.example.com/getData';
const EXT_SVCURL17764 = process.env.VCAP_URL17764 || 'https://somesv17764.example.com/getData';
const EXT_SVCURL31745 = process.env.VCAP_URL31745 || 'https://somesv31745.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32613</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));