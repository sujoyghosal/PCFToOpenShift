const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8214;
const EXT_SVCURL30444 = process.env.VCAP_URL30444 || 'https://somesv30444.example.com/getData';
const EXT_SVCURL9242 = process.env.VCAP_URL9242 || 'https://somesv9242.example.com/getData';
const EXT_SVCURL11700 = process.env.VCAP_URL11700 || 'https://somesv11700.example.com/getData';
const EXT_SVCURL4688 = process.env.VCAP_URL4688 || 'https://somesv4688.example.com/getData';
const EXT_SVCURL7869 = process.env.VCAP_URL7869 || 'https://somesv7869.example.com/getData';
const EXT_SVCURL29649 = process.env.VCAP_URL29649 || 'https://somesv29649.example.com/getData';
const EXT_SVCURL24832 = process.env.VCAP_URL24832 || 'https://somesv24832.example.com/getData';
const EXT_SVCURL3993 = process.env.VCAP_URL3993 || 'https://somesv3993.example.com/getData';
const EXT_SVCURL21011 = process.env.VCAP_URL21011 || 'https://somesv21011.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8214</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));