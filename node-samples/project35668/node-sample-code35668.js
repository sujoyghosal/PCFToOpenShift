const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35668;
const EXT_SVCURL24770 = process.env.VCAP_URL24770 || 'https://somesv24770.example.com/getData';
const EXT_SVCURL6352 = process.env.VCAP_URL6352 || 'https://somesv6352.example.com/getData';
const EXT_SVCURL13700 = process.env.VCAP_URL13700 || 'https://somesv13700.example.com/getData';
const EXT_SVCURL21557 = process.env.VCAP_URL21557 || 'https://somesv21557.example.com/getData';
const EXT_SVCURL24817 = process.env.VCAP_URL24817 || 'https://somesv24817.example.com/getData';
const EXT_SVCURL20268 = process.env.VCAP_URL20268 || 'https://somesv20268.example.com/getData';
const EXT_SVCURL6507 = process.env.VCAP_URL6507 || 'https://somesv6507.example.com/getData';
const EXT_SVCURL11626 = process.env.VCAP_URL11626 || 'https://somesv11626.example.com/getData';
const EXT_SVCURL11240 = process.env.VCAP_URL11240 || 'https://somesv11240.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35668</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));