const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 20229;
const EXT_SVCURL31944 = process.env.VCAP_URL31944 || 'https://somesv31944.example.com/getData';
const EXT_SVCURL30711 = process.env.VCAP_URL30711 || 'https://somesv30711.example.com/getData';
const EXT_SVCURL6016 = process.env.VCAP_URL6016 || 'https://somesv6016.example.com/getData';
const EXT_SVCURL11499 = process.env.VCAP_URL11499 || 'https://somesv11499.example.com/getData';
const EXT_SVCURL33109 = process.env.VCAP_URL33109 || 'https://somesv33109.example.com/getData';
const EXT_SVCURL5887 = process.env.VCAP_URL5887 || 'https://somesv5887.example.com/getData';
const EXT_SVCURL4987 = process.env.VCAP_URL4987 || 'https://somesv4987.example.com/getData';
const EXT_SVCURL23269 = process.env.VCAP_URL23269 || 'https://somesv23269.example.com/getData';
const EXT_SVCURL7329 = process.env.VCAP_URL7329 || 'https://somesv7329.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20229</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));