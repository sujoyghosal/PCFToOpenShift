const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27196;
const EXT_SVCURL6631 = process.env.VCAP_URL6631 || 'https://somesv6631.example.com/getData';
const EXT_SVCURL6726 = process.env.VCAP_URL6726 || 'https://somesv6726.example.com/getData';
const EXT_SVCURL28303 = process.env.VCAP_URL28303 || 'https://somesv28303.example.com/getData';
const EXT_SVCURL9303 = process.env.VCAP_URL9303 || 'https://somesv9303.example.com/getData';
const EXT_SVCURL32679 = process.env.VCAP_URL32679 || 'https://somesv32679.example.com/getData';
const EXT_SVCURL12514 = process.env.VCAP_URL12514 || 'https://somesv12514.example.com/getData';
const EXT_SVCURL25424 = process.env.VCAP_URL25424 || 'https://somesv25424.example.com/getData';
const EXT_SVCURL24044 = process.env.VCAP_URL24044 || 'https://somesv24044.example.com/getData';
const EXT_SVCURL33955 = process.env.VCAP_URL33955 || 'https://somesv33955.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27196</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));