const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 7562;
const EXT_SVCURL8246 = process.env.VCAP_URL8246 || 'https://somesv8246.example.com/getData';
const EXT_SVCURL28516 = process.env.VCAP_URL28516 || 'https://somesv28516.example.com/getData';
const EXT_SVCURL26661 = process.env.VCAP_URL26661 || 'https://somesv26661.example.com/getData';
const EXT_SVCURL16864 = process.env.VCAP_URL16864 || 'https://somesv16864.example.com/getData';
const EXT_SVCURL14813 = process.env.VCAP_URL14813 || 'https://somesv14813.example.com/getData';
const EXT_SVCURL27689 = process.env.VCAP_URL27689 || 'https://somesv27689.example.com/getData';
const EXT_SVCURL28990 = process.env.VCAP_URL28990 || 'https://somesv28990.example.com/getData';
const EXT_SVCURL22077 = process.env.VCAP_URL22077 || 'https://somesv22077.example.com/getData';
const EXT_SVCURL26148 = process.env.VCAP_URL26148 || 'https://somesv26148.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7562</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));