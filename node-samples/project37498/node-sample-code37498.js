const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 37498;
const EXT_SVCURL6922 = process.env.VCAP_URL6922 || 'https://somesv6922.example.com/getData';
const EXT_SVCURL17538 = process.env.VCAP_URL17538 || 'https://somesv17538.example.com/getData';
const EXT_SVCURL3755 = process.env.VCAP_URL3755 || 'https://somesv3755.example.com/getData';
const EXT_SVCURL2376 = process.env.VCAP_URL2376 || 'https://somesv2376.example.com/getData';
const EXT_SVCURL27479 = process.env.VCAP_URL27479 || 'https://somesv27479.example.com/getData';
const EXT_SVCURL28047 = process.env.VCAP_URL28047 || 'https://somesv28047.example.com/getData';
const EXT_SVCURL16740 = process.env.VCAP_URL16740 || 'https://somesv16740.example.com/getData';
const EXT_SVCURL15371 = process.env.VCAP_URL15371 || 'https://somesv15371.example.com/getData';
const EXT_SVCURL12727 = process.env.VCAP_URL12727 || 'https://somesv12727.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #37498</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));