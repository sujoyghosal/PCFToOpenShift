const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21114;
const EXT_SVCURL16241 = process.env.VCAP_URL16241 || 'https://somesv16241.example.com/getData';
const EXT_SVCURL12164 = process.env.VCAP_URL12164 || 'https://somesv12164.example.com/getData';
const EXT_SVCURL27652 = process.env.VCAP_URL27652 || 'https://somesv27652.example.com/getData';
const EXT_SVCURL12991 = process.env.VCAP_URL12991 || 'https://somesv12991.example.com/getData';
const EXT_SVCURL33263 = process.env.VCAP_URL33263 || 'https://somesv33263.example.com/getData';
const EXT_SVCURL8151 = process.env.VCAP_URL8151 || 'https://somesv8151.example.com/getData';
const EXT_SVCURL10220 = process.env.VCAP_URL10220 || 'https://somesv10220.example.com/getData';
const EXT_SVCURL14967 = process.env.VCAP_URL14967 || 'https://somesv14967.example.com/getData';
const EXT_SVCURL14512 = process.env.VCAP_URL14512 || 'https://somesv14512.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21114</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));