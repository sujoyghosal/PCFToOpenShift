const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 23474;
const EXT_SVCURL21983 = process.env.VCAP_URL21983 || 'https://somesv21983.example.com/getData';
const EXT_SVCURL19705 = process.env.VCAP_URL19705 || 'https://somesv19705.example.com/getData';
const EXT_SVCURL30095 = process.env.VCAP_URL30095 || 'https://somesv30095.example.com/getData';
const EXT_SVCURL21256 = process.env.VCAP_URL21256 || 'https://somesv21256.example.com/getData';
const EXT_SVCURL6209 = process.env.VCAP_URL6209 || 'https://somesv6209.example.com/getData';
const EXT_SVCURL27736 = process.env.VCAP_URL27736 || 'https://somesv27736.example.com/getData';
const EXT_SVCURL4975 = process.env.VCAP_URL4975 || 'https://somesv4975.example.com/getData';
const EXT_SVCURL2917 = process.env.VCAP_URL2917 || 'https://somesv2917.example.com/getData';
const EXT_SVCURL18093 = process.env.VCAP_URL18093 || 'https://somesv18093.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23474</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));