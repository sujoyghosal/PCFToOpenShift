const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6745;
const EXT_SVCURL20624 = process.env.VCAP_URL20624 || 'https://somesv20624.example.com/getData';
const EXT_SVCURL14851 = process.env.VCAP_URL14851 || 'https://somesv14851.example.com/getData';
const EXT_SVCURL3650 = process.env.VCAP_URL3650 || 'https://somesv3650.example.com/getData';
const EXT_SVCURL16620 = process.env.VCAP_URL16620 || 'https://somesv16620.example.com/getData';
const EXT_SVCURL21176 = process.env.VCAP_URL21176 || 'https://somesv21176.example.com/getData';
const EXT_SVCURL24062 = process.env.VCAP_URL24062 || 'https://somesv24062.example.com/getData';
const EXT_SVCURL12860 = process.env.VCAP_URL12860 || 'https://somesv12860.example.com/getData';
const EXT_SVCURL4710 = process.env.VCAP_URL4710 || 'https://somesv4710.example.com/getData';
const EXT_SVCURL24823 = process.env.VCAP_URL24823 || 'https://somesv24823.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6745</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
