const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 36815;
const EXT_SVCURL2533 = process.env.VCAP_URL2533 || 'https://somesv2533.example.com/getData';
const EXT_SVCURL31136 = process.env.VCAP_URL31136 || 'https://somesv31136.example.com/getData';
const EXT_SVCURL27783 = process.env.VCAP_URL27783 || 'https://somesv27783.example.com/getData';
const EXT_SVCURL16958 = process.env.VCAP_URL16958 || 'https://somesv16958.example.com/getData';
const EXT_SVCURL25226 = process.env.VCAP_URL25226 || 'https://somesv25226.example.com/getData';
const EXT_SVCURL10251 = process.env.VCAP_URL10251 || 'https://somesv10251.example.com/getData';
const EXT_SVCURL17480 = process.env.VCAP_URL17480 || 'https://somesv17480.example.com/getData';
const EXT_SVCURL29543 = process.env.VCAP_URL29543 || 'https://somesv29543.example.com/getData';
const EXT_SVCURL10721 = process.env.VCAP_URL10721 || 'https://somesv10721.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36815</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));