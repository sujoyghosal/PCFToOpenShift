const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32013;
const EXT_SVCURL24550 = process.env.VCAP_URL24550 || 'https://somesv24550.example.com/getData';
const EXT_SVCURL12175 = process.env.VCAP_URL12175 || 'https://somesv12175.example.com/getData';
const EXT_SVCURL6507 = process.env.VCAP_URL6507 || 'https://somesv6507.example.com/getData';
const EXT_SVCURL8361 = process.env.VCAP_URL8361 || 'https://somesv8361.example.com/getData';
const EXT_SVCURL33570 = process.env.VCAP_URL33570 || 'https://somesv33570.example.com/getData';
const EXT_SVCURL4242 = process.env.VCAP_URL4242 || 'https://somesv4242.example.com/getData';
const EXT_SVCURL25702 = process.env.VCAP_URL25702 || 'https://somesv25702.example.com/getData';
const EXT_SVCURL12515 = process.env.VCAP_URL12515 || 'https://somesv12515.example.com/getData';
const EXT_SVCURL3288 = process.env.VCAP_URL3288 || 'https://somesv3288.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32013</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
