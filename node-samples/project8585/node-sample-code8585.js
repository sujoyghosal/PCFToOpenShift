const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8585;
const EXT_SVCURL32424 = process.env.VCAP_URL32424 || 'https://somesv32424.example.com/getData';
const EXT_SVCURL16071 = process.env.VCAP_URL16071 || 'https://somesv16071.example.com/getData';
const EXT_SVCURL31327 = process.env.VCAP_URL31327 || 'https://somesv31327.example.com/getData';
const EXT_SVCURL24737 = process.env.VCAP_URL24737 || 'https://somesv24737.example.com/getData';
const EXT_SVCURL29163 = process.env.VCAP_URL29163 || 'https://somesv29163.example.com/getData';
const EXT_SVCURL10560 = process.env.VCAP_URL10560 || 'https://somesv10560.example.com/getData';
const EXT_SVCURL24832 = process.env.VCAP_URL24832 || 'https://somesv24832.example.com/getData';
const EXT_SVCURL26482 = process.env.VCAP_URL26482 || 'https://somesv26482.example.com/getData';
const EXT_SVCURL5941 = process.env.VCAP_URL5941 || 'https://somesv5941.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8585</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
