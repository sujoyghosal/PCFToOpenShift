const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6272;
const EXT_SVCURL10182 = process.env.VCAP_URL10182 || 'https://somesv10182.example.com/getData';
const EXT_SVCURL14527 = process.env.VCAP_URL14527 || 'https://somesv14527.example.com/getData';
const EXT_SVCURL21723 = process.env.VCAP_URL21723 || 'https://somesv21723.example.com/getData';
const EXT_SVCURL21923 = process.env.VCAP_URL21923 || 'https://somesv21923.example.com/getData';
const EXT_SVCURL30386 = process.env.VCAP_URL30386 || 'https://somesv30386.example.com/getData';
const EXT_SVCURL5218 = process.env.VCAP_URL5218 || 'https://somesv5218.example.com/getData';
const EXT_SVCURL10705 = process.env.VCAP_URL10705 || 'https://somesv10705.example.com/getData';
const EXT_SVCURL32580 = process.env.VCAP_URL32580 || 'https://somesv32580.example.com/getData';
const EXT_SVCURL17247 = process.env.VCAP_URL17247 || 'https://somesv17247.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6272</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
