const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6638;
const EXT_SVCURL20430 = process.env.VCAP_URL20430 || 'https://somesv20430.example.com/getData';
const EXT_SVCURL18077 = process.env.VCAP_URL18077 || 'https://somesv18077.example.com/getData';
const EXT_SVCURL11190 = process.env.VCAP_URL11190 || 'https://somesv11190.example.com/getData';
const EXT_SVCURL24652 = process.env.VCAP_URL24652 || 'https://somesv24652.example.com/getData';
const EXT_SVCURL17809 = process.env.VCAP_URL17809 || 'https://somesv17809.example.com/getData';
const EXT_SVCURL17038 = process.env.VCAP_URL17038 || 'https://somesv17038.example.com/getData';
const EXT_SVCURL23477 = process.env.VCAP_URL23477 || 'https://somesv23477.example.com/getData';
const EXT_SVCURL26194 = process.env.VCAP_URL26194 || 'https://somesv26194.example.com/getData';
const EXT_SVCURL23229 = process.env.VCAP_URL23229 || 'https://somesv23229.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6638</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
