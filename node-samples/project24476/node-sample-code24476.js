const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 24476;
const EXT_SVCURL21002 = process.env.VCAP_URL21002 || 'https://somesv21002.example.com/getData';
const EXT_SVCURL12559 = process.env.VCAP_URL12559 || 'https://somesv12559.example.com/getData';
const EXT_SVCURL3477 = process.env.VCAP_URL3477 || 'https://somesv3477.example.com/getData';
const EXT_SVCURL29827 = process.env.VCAP_URL29827 || 'https://somesv29827.example.com/getData';
const EXT_SVCURL28292 = process.env.VCAP_URL28292 || 'https://somesv28292.example.com/getData';
const EXT_SVCURL10715 = process.env.VCAP_URL10715 || 'https://somesv10715.example.com/getData';
const EXT_SVCURL6933 = process.env.VCAP_URL6933 || 'https://somesv6933.example.com/getData';
const EXT_SVCURL5879 = process.env.VCAP_URL5879 || 'https://somesv5879.example.com/getData';
const EXT_SVCURL34412 = process.env.VCAP_URL34412 || 'https://somesv34412.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #24476</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));