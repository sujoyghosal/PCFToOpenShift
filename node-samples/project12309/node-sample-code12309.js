const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12309;
const EXT_SVCURL5210 = process.env.VCAP_URL5210 || 'https://somesv5210.example.com/getData';
const EXT_SVCURL24734 = process.env.VCAP_URL24734 || 'https://somesv24734.example.com/getData';
const EXT_SVCURL33636 = process.env.VCAP_URL33636 || 'https://somesv33636.example.com/getData';
const EXT_SVCURL13832 = process.env.VCAP_URL13832 || 'https://somesv13832.example.com/getData';
const EXT_SVCURL20412 = process.env.VCAP_URL20412 || 'https://somesv20412.example.com/getData';
const EXT_SVCURL8982 = process.env.VCAP_URL8982 || 'https://somesv8982.example.com/getData';
const EXT_SVCURL29911 = process.env.VCAP_URL29911 || 'https://somesv29911.example.com/getData';
const EXT_SVCURL24536 = process.env.VCAP_URL24536 || 'https://somesv24536.example.com/getData';
const EXT_SVCURL33203 = process.env.VCAP_URL33203 || 'https://somesv33203.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12309</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));