const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32061;
const EXT_SVCURL26000 = process.env.VCAP_URL26000 || 'https://somesv26000.example.com/getData';
const EXT_SVCURL14226 = process.env.VCAP_URL14226 || 'https://somesv14226.example.com/getData';
const EXT_SVCURL7140 = process.env.VCAP_URL7140 || 'https://somesv7140.example.com/getData';
const EXT_SVCURL20036 = process.env.VCAP_URL20036 || 'https://somesv20036.example.com/getData';
const EXT_SVCURL12812 = process.env.VCAP_URL12812 || 'https://somesv12812.example.com/getData';
const EXT_SVCURL21003 = process.env.VCAP_URL21003 || 'https://somesv21003.example.com/getData';
const EXT_SVCURL24282 = process.env.VCAP_URL24282 || 'https://somesv24282.example.com/getData';
const EXT_SVCURL9391 = process.env.VCAP_URL9391 || 'https://somesv9391.example.com/getData';
const EXT_SVCURL4094 = process.env.VCAP_URL4094 || 'https://somesv4094.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32061</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));