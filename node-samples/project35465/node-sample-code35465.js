const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35465;
const EXT_SVCURL21745 = process.env.VCAP_URL21745 || 'https://somesv21745.example.com/getData';
const EXT_SVCURL29355 = process.env.VCAP_URL29355 || 'https://somesv29355.example.com/getData';
const EXT_SVCURL26388 = process.env.VCAP_URL26388 || 'https://somesv26388.example.com/getData';
const EXT_SVCURL4104 = process.env.VCAP_URL4104 || 'https://somesv4104.example.com/getData';
const EXT_SVCURL6305 = process.env.VCAP_URL6305 || 'https://somesv6305.example.com/getData';
const EXT_SVCURL14403 = process.env.VCAP_URL14403 || 'https://somesv14403.example.com/getData';
const EXT_SVCURL6198 = process.env.VCAP_URL6198 || 'https://somesv6198.example.com/getData';
const EXT_SVCURL16588 = process.env.VCAP_URL16588 || 'https://somesv16588.example.com/getData';
const EXT_SVCURL33147 = process.env.VCAP_URL33147 || 'https://somesv33147.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35465</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));