const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6190;
const EXT_SVCURL28363 = process.env.VCAP_URL28363 || 'https://somesv28363.example.com/getData';
const EXT_SVCURL6583 = process.env.VCAP_URL6583 || 'https://somesv6583.example.com/getData';
const EXT_SVCURL16043 = process.env.VCAP_URL16043 || 'https://somesv16043.example.com/getData';
const EXT_SVCURL29993 = process.env.VCAP_URL29993 || 'https://somesv29993.example.com/getData';
const EXT_SVCURL10420 = process.env.VCAP_URL10420 || 'https://somesv10420.example.com/getData';
const EXT_SVCURL21005 = process.env.VCAP_URL21005 || 'https://somesv21005.example.com/getData';
const EXT_SVCURL10523 = process.env.VCAP_URL10523 || 'https://somesv10523.example.com/getData';
const EXT_SVCURL30690 = process.env.VCAP_URL30690 || 'https://somesv30690.example.com/getData';
const EXT_SVCURL31247 = process.env.VCAP_URL31247 || 'https://somesv31247.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6190</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
