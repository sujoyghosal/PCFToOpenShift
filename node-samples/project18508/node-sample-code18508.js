const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18508;
const EXT_SVCURL31725 = process.env.VCAP_URL31725 || 'https://somesv31725.example.com/getData';
const EXT_SVCURL33023 = process.env.VCAP_URL33023 || 'https://somesv33023.example.com/getData';
const EXT_SVCURL6789 = process.env.VCAP_URL6789 || 'https://somesv6789.example.com/getData';
const EXT_SVCURL12753 = process.env.VCAP_URL12753 || 'https://somesv12753.example.com/getData';
const EXT_SVCURL15807 = process.env.VCAP_URL15807 || 'https://somesv15807.example.com/getData';
const EXT_SVCURL13777 = process.env.VCAP_URL13777 || 'https://somesv13777.example.com/getData';
const EXT_SVCURL4897 = process.env.VCAP_URL4897 || 'https://somesv4897.example.com/getData';
const EXT_SVCURL6936 = process.env.VCAP_URL6936 || 'https://somesv6936.example.com/getData';
const EXT_SVCURL26118 = process.env.VCAP_URL26118 || 'https://somesv26118.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18508</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));