const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 30090;
const EXT_SVCURL14902 = process.env.VCAP_URL14902 || 'https://somesv14902.example.com/getData';
const EXT_SVCURL12325 = process.env.VCAP_URL12325 || 'https://somesv12325.example.com/getData';
const EXT_SVCURL11966 = process.env.VCAP_URL11966 || 'https://somesv11966.example.com/getData';
const EXT_SVCURL31354 = process.env.VCAP_URL31354 || 'https://somesv31354.example.com/getData';
const EXT_SVCURL23881 = process.env.VCAP_URL23881 || 'https://somesv23881.example.com/getData';
const EXT_SVCURL7547 = process.env.VCAP_URL7547 || 'https://somesv7547.example.com/getData';
const EXT_SVCURL4349 = process.env.VCAP_URL4349 || 'https://somesv4349.example.com/getData';
const EXT_SVCURL4030 = process.env.VCAP_URL4030 || 'https://somesv4030.example.com/getData';
const EXT_SVCURL12522 = process.env.VCAP_URL12522 || 'https://somesv12522.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #30090</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
