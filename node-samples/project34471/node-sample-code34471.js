const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34471;
const EXT_SVCURL15844 = process.env.VCAP_URL15844 || 'https://somesv15844.example.com/getData';
const EXT_SVCURL25427 = process.env.VCAP_URL25427 || 'https://somesv25427.example.com/getData';
const EXT_SVCURL25987 = process.env.VCAP_URL25987 || 'https://somesv25987.example.com/getData';
const EXT_SVCURL31772 = process.env.VCAP_URL31772 || 'https://somesv31772.example.com/getData';
const EXT_SVCURL20687 = process.env.VCAP_URL20687 || 'https://somesv20687.example.com/getData';
const EXT_SVCURL9024 = process.env.VCAP_URL9024 || 'https://somesv9024.example.com/getData';
const EXT_SVCURL23851 = process.env.VCAP_URL23851 || 'https://somesv23851.example.com/getData';
const EXT_SVCURL32089 = process.env.VCAP_URL32089 || 'https://somesv32089.example.com/getData';
const EXT_SVCURL7397 = process.env.VCAP_URL7397 || 'https://somesv7397.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34471</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));