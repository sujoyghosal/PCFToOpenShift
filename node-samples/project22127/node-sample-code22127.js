const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 22127;
const EXT_SVCURL21980 = process.env.VCAP_URL21980 || 'https://somesv21980.example.com/getData';
const EXT_SVCURL14825 = process.env.VCAP_URL14825 || 'https://somesv14825.example.com/getData';
const EXT_SVCURL4427 = process.env.VCAP_URL4427 || 'https://somesv4427.example.com/getData';
const EXT_SVCURL29202 = process.env.VCAP_URL29202 || 'https://somesv29202.example.com/getData';
const EXT_SVCURL16065 = process.env.VCAP_URL16065 || 'https://somesv16065.example.com/getData';
const EXT_SVCURL3006 = process.env.VCAP_URL3006 || 'https://somesv3006.example.com/getData';
const EXT_SVCURL9648 = process.env.VCAP_URL9648 || 'https://somesv9648.example.com/getData';
const EXT_SVCURL24202 = process.env.VCAP_URL24202 || 'https://somesv24202.example.com/getData';
const EXT_SVCURL7235 = process.env.VCAP_URL7235 || 'https://somesv7235.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #22127</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
