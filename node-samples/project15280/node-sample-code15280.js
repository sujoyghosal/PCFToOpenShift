const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15280;
const EXT_SVCURL19180 = process.env.VCAP_URL19180 || 'https://somesv19180.example.com/getData';
const EXT_SVCURL17541 = process.env.VCAP_URL17541 || 'https://somesv17541.example.com/getData';
const EXT_SVCURL33675 = process.env.VCAP_URL33675 || 'https://somesv33675.example.com/getData';
const EXT_SVCURL8504 = process.env.VCAP_URL8504 || 'https://somesv8504.example.com/getData';
const EXT_SVCURL8054 = process.env.VCAP_URL8054 || 'https://somesv8054.example.com/getData';
const EXT_SVCURL14537 = process.env.VCAP_URL14537 || 'https://somesv14537.example.com/getData';
const EXT_SVCURL3939 = process.env.VCAP_URL3939 || 'https://somesv3939.example.com/getData';
const EXT_SVCURL8588 = process.env.VCAP_URL8588 || 'https://somesv8588.example.com/getData';
const EXT_SVCURL14020 = process.env.VCAP_URL14020 || 'https://somesv14020.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15280</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));