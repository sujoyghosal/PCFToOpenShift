const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25845;
const EXT_SVCURL19916 = process.env.VCAP_URL19916 || 'https://somesv19916.example.com/getData';
const EXT_SVCURL7263 = process.env.VCAP_URL7263 || 'https://somesv7263.example.com/getData';
const EXT_SVCURL31966 = process.env.VCAP_URL31966 || 'https://somesv31966.example.com/getData';
const EXT_SVCURL22368 = process.env.VCAP_URL22368 || 'https://somesv22368.example.com/getData';
const EXT_SVCURL6697 = process.env.VCAP_URL6697 || 'https://somesv6697.example.com/getData';
const EXT_SVCURL30517 = process.env.VCAP_URL30517 || 'https://somesv30517.example.com/getData';
const EXT_SVCURL13695 = process.env.VCAP_URL13695 || 'https://somesv13695.example.com/getData';
const EXT_SVCURL32403 = process.env.VCAP_URL32403 || 'https://somesv32403.example.com/getData';
const EXT_SVCURL15239 = process.env.VCAP_URL15239 || 'https://somesv15239.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25845</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));