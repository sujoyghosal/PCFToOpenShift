const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 29850;
const EXT_SVCURL13965 = process.env.VCAP_URL13965 || 'https://somesv13965.example.com/getData';
const EXT_SVCURL33043 = process.env.VCAP_URL33043 || 'https://somesv33043.example.com/getData';
const EXT_SVCURL33340 = process.env.VCAP_URL33340 || 'https://somesv33340.example.com/getData';
const EXT_SVCURL11778 = process.env.VCAP_URL11778 || 'https://somesv11778.example.com/getData';
const EXT_SVCURL10541 = process.env.VCAP_URL10541 || 'https://somesv10541.example.com/getData';
const EXT_SVCURL14278 = process.env.VCAP_URL14278 || 'https://somesv14278.example.com/getData';
const EXT_SVCURL31523 = process.env.VCAP_URL31523 || 'https://somesv31523.example.com/getData';
const EXT_SVCURL34116 = process.env.VCAP_URL34116 || 'https://somesv34116.example.com/getData';
const EXT_SVCURL27368 = process.env.VCAP_URL27368 || 'https://somesv27368.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #29850</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));