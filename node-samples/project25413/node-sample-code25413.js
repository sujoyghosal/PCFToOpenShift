const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25413;
const EXT_SVCURL4987 = process.env.VCAP_URL4987 || 'https://somesv4987.example.com/getData';
const EXT_SVCURL27173 = process.env.VCAP_URL27173 || 'https://somesv27173.example.com/getData';
const EXT_SVCURL11709 = process.env.VCAP_URL11709 || 'https://somesv11709.example.com/getData';
const EXT_SVCURL3258 = process.env.VCAP_URL3258 || 'https://somesv3258.example.com/getData';
const EXT_SVCURL26862 = process.env.VCAP_URL26862 || 'https://somesv26862.example.com/getData';
const EXT_SVCURL19284 = process.env.VCAP_URL19284 || 'https://somesv19284.example.com/getData';
const EXT_SVCURL32586 = process.env.VCAP_URL32586 || 'https://somesv32586.example.com/getData';
const EXT_SVCURL22201 = process.env.VCAP_URL22201 || 'https://somesv22201.example.com/getData';
const EXT_SVCURL31490 = process.env.VCAP_URL31490 || 'https://somesv31490.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25413</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));