const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18202;
const EXT_SVCURL28464 = process.env.VCAP_URL28464 || 'https://somesv28464.example.com/getData';
const EXT_SVCURL34304 = process.env.VCAP_URL34304 || 'https://somesv34304.example.com/getData';
const EXT_SVCURL17561 = process.env.VCAP_URL17561 || 'https://somesv17561.example.com/getData';
const EXT_SVCURL5189 = process.env.VCAP_URL5189 || 'https://somesv5189.example.com/getData';
const EXT_SVCURL16228 = process.env.VCAP_URL16228 || 'https://somesv16228.example.com/getData';
const EXT_SVCURL20158 = process.env.VCAP_URL20158 || 'https://somesv20158.example.com/getData';
const EXT_SVCURL9512 = process.env.VCAP_URL9512 || 'https://somesv9512.example.com/getData';
const EXT_SVCURL5352 = process.env.VCAP_URL5352 || 'https://somesv5352.example.com/getData';
const EXT_SVCURL16920 = process.env.VCAP_URL16920 || 'https://somesv16920.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18202</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));