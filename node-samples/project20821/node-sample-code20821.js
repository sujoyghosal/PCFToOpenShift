const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20821;
const EXT_SVCURL8020 = process.env.VCAP_URL8020 || 'https://somesv8020.example.com/getData';
const EXT_SVCURL30091 = process.env.VCAP_URL30091 || 'https://somesv30091.example.com/getData';
const EXT_SVCURL20291 = process.env.VCAP_URL20291 || 'https://somesv20291.example.com/getData';
const EXT_SVCURL14021 = process.env.VCAP_URL14021 || 'https://somesv14021.example.com/getData';
const EXT_SVCURL8620 = process.env.VCAP_URL8620 || 'https://somesv8620.example.com/getData';
const EXT_SVCURL19974 = process.env.VCAP_URL19974 || 'https://somesv19974.example.com/getData';
const EXT_SVCURL8376 = process.env.VCAP_URL8376 || 'https://somesv8376.example.com/getData';
const EXT_SVCURL12889 = process.env.VCAP_URL12889 || 'https://somesv12889.example.com/getData';
const EXT_SVCURL4043 = process.env.VCAP_URL4043 || 'https://somesv4043.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20821</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
