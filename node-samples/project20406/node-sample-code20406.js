const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20406;
const EXT_SVCURL8091 = process.env.VCAP_URL8091 || 'https://somesv8091.example.com/getData';
const EXT_SVCURL7092 = process.env.VCAP_URL7092 || 'https://somesv7092.example.com/getData';
const EXT_SVCURL28219 = process.env.VCAP_URL28219 || 'https://somesv28219.example.com/getData';
const EXT_SVCURL10671 = process.env.VCAP_URL10671 || 'https://somesv10671.example.com/getData';
const EXT_SVCURL26845 = process.env.VCAP_URL26845 || 'https://somesv26845.example.com/getData';
const EXT_SVCURL29089 = process.env.VCAP_URL29089 || 'https://somesv29089.example.com/getData';
const EXT_SVCURL27720 = process.env.VCAP_URL27720 || 'https://somesv27720.example.com/getData';
const EXT_SVCURL18486 = process.env.VCAP_URL18486 || 'https://somesv18486.example.com/getData';
const EXT_SVCURL31861 = process.env.VCAP_URL31861 || 'https://somesv31861.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20406</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));