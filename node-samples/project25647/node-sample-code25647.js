const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25647;
const EXT_SVCURL24341 = process.env.VCAP_URL24341 || 'https://somesv24341.example.com/getData';
const EXT_SVCURL25450 = process.env.VCAP_URL25450 || 'https://somesv25450.example.com/getData';
const EXT_SVCURL31968 = process.env.VCAP_URL31968 || 'https://somesv31968.example.com/getData';
const EXT_SVCURL25703 = process.env.VCAP_URL25703 || 'https://somesv25703.example.com/getData';
const EXT_SVCURL31405 = process.env.VCAP_URL31405 || 'https://somesv31405.example.com/getData';
const EXT_SVCURL7716 = process.env.VCAP_URL7716 || 'https://somesv7716.example.com/getData';
const EXT_SVCURL18323 = process.env.VCAP_URL18323 || 'https://somesv18323.example.com/getData';
const EXT_SVCURL2497 = process.env.VCAP_URL2497 || 'https://somesv2497.example.com/getData';
const EXT_SVCURL27943 = process.env.VCAP_URL27943 || 'https://somesv27943.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25647</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));