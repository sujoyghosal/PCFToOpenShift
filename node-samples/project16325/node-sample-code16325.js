const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16325;
const EXT_SVCURL32263 = process.env.VCAP_URL32263 || 'https://somesv32263.example.com/getData';
const EXT_SVCURL14355 = process.env.VCAP_URL14355 || 'https://somesv14355.example.com/getData';
const EXT_SVCURL4302 = process.env.VCAP_URL4302 || 'https://somesv4302.example.com/getData';
const EXT_SVCURL27441 = process.env.VCAP_URL27441 || 'https://somesv27441.example.com/getData';
const EXT_SVCURL8488 = process.env.VCAP_URL8488 || 'https://somesv8488.example.com/getData';
const EXT_SVCURL11912 = process.env.VCAP_URL11912 || 'https://somesv11912.example.com/getData';
const EXT_SVCURL22675 = process.env.VCAP_URL22675 || 'https://somesv22675.example.com/getData';
const EXT_SVCURL33823 = process.env.VCAP_URL33823 || 'https://somesv33823.example.com/getData';
const EXT_SVCURL15465 = process.env.VCAP_URL15465 || 'https://somesv15465.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16325</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));