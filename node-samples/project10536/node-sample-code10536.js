const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 10536;
const EXT_SVCURL22530 = process.env.VCAP_URL22530 || 'https://somesv22530.example.com/getData';
const EXT_SVCURL25610 = process.env.VCAP_URL25610 || 'https://somesv25610.example.com/getData';
const EXT_SVCURL30258 = process.env.VCAP_URL30258 || 'https://somesv30258.example.com/getData';
const EXT_SVCURL22656 = process.env.VCAP_URL22656 || 'https://somesv22656.example.com/getData';
const EXT_SVCURL4982 = process.env.VCAP_URL4982 || 'https://somesv4982.example.com/getData';
const EXT_SVCURL15519 = process.env.VCAP_URL15519 || 'https://somesv15519.example.com/getData';
const EXT_SVCURL31074 = process.env.VCAP_URL31074 || 'https://somesv31074.example.com/getData';
const EXT_SVCURL8962 = process.env.VCAP_URL8962 || 'https://somesv8962.example.com/getData';
const EXT_SVCURL26864 = process.env.VCAP_URL26864 || 'https://somesv26864.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10536</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));