const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25397;
const EXT_SVCURL30625 = process.env.VCAP_URL30625 || 'https://somesv30625.example.com/getData';
const EXT_SVCURL24985 = process.env.VCAP_URL24985 || 'https://somesv24985.example.com/getData';
const EXT_SVCURL28463 = process.env.VCAP_URL28463 || 'https://somesv28463.example.com/getData';
const EXT_SVCURL34696 = process.env.VCAP_URL34696 || 'https://somesv34696.example.com/getData';
const EXT_SVCURL17545 = process.env.VCAP_URL17545 || 'https://somesv17545.example.com/getData';
const EXT_SVCURL23651 = process.env.VCAP_URL23651 || 'https://somesv23651.example.com/getData';
const EXT_SVCURL22541 = process.env.VCAP_URL22541 || 'https://somesv22541.example.com/getData';
const EXT_SVCURL29555 = process.env.VCAP_URL29555 || 'https://somesv29555.example.com/getData';
const EXT_SVCURL31255 = process.env.VCAP_URL31255 || 'https://somesv31255.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25397</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));