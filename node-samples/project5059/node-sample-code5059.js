const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5059;
const EXT_SVCURL8266 = process.env.VCAP_URL8266 || 'https://somesv8266.example.com/getData';
const EXT_SVCURL11986 = process.env.VCAP_URL11986 || 'https://somesv11986.example.com/getData';
const EXT_SVCURL20648 = process.env.VCAP_URL20648 || 'https://somesv20648.example.com/getData';
const EXT_SVCURL17414 = process.env.VCAP_URL17414 || 'https://somesv17414.example.com/getData';
const EXT_SVCURL24843 = process.env.VCAP_URL24843 || 'https://somesv24843.example.com/getData';
const EXT_SVCURL3676 = process.env.VCAP_URL3676 || 'https://somesv3676.example.com/getData';
const EXT_SVCURL8797 = process.env.VCAP_URL8797 || 'https://somesv8797.example.com/getData';
const EXT_SVCURL30891 = process.env.VCAP_URL30891 || 'https://somesv30891.example.com/getData';
const EXT_SVCURL23290 = process.env.VCAP_URL23290 || 'https://somesv23290.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5059</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
