const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18500;
const EXT_SVCURL21089 = process.env.VCAP_URL21089 || 'https://somesv21089.example.com/getData';
const EXT_SVCURL24664 = process.env.VCAP_URL24664 || 'https://somesv24664.example.com/getData';
const EXT_SVCURL29353 = process.env.VCAP_URL29353 || 'https://somesv29353.example.com/getData';
const EXT_SVCURL25939 = process.env.VCAP_URL25939 || 'https://somesv25939.example.com/getData';
const EXT_SVCURL12094 = process.env.VCAP_URL12094 || 'https://somesv12094.example.com/getData';
const EXT_SVCURL32774 = process.env.VCAP_URL32774 || 'https://somesv32774.example.com/getData';
const EXT_SVCURL28194 = process.env.VCAP_URL28194 || 'https://somesv28194.example.com/getData';
const EXT_SVCURL34393 = process.env.VCAP_URL34393 || 'https://somesv34393.example.com/getData';
const EXT_SVCURL6003 = process.env.VCAP_URL6003 || 'https://somesv6003.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18500</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
