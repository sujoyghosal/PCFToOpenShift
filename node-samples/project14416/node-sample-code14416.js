const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 14416;
const EXT_SVCURL31715 = process.env.VCAP_URL31715 || 'https://somesv31715.example.com/getData';
const EXT_SVCURL25257 = process.env.VCAP_URL25257 || 'https://somesv25257.example.com/getData';
const EXT_SVCURL15359 = process.env.VCAP_URL15359 || 'https://somesv15359.example.com/getData';
const EXT_SVCURL23356 = process.env.VCAP_URL23356 || 'https://somesv23356.example.com/getData';
const EXT_SVCURL3888 = process.env.VCAP_URL3888 || 'https://somesv3888.example.com/getData';
const EXT_SVCURL6948 = process.env.VCAP_URL6948 || 'https://somesv6948.example.com/getData';
const EXT_SVCURL33408 = process.env.VCAP_URL33408 || 'https://somesv33408.example.com/getData';
const EXT_SVCURL5324 = process.env.VCAP_URL5324 || 'https://somesv5324.example.com/getData';
const EXT_SVCURL32918 = process.env.VCAP_URL32918 || 'https://somesv32918.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14416</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));