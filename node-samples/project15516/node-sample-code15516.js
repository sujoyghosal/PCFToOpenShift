const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15516;
const EXT_SVCURL6060 = process.env.VCAP_URL6060 || 'https://somesv6060.example.com/getData';
const EXT_SVCURL29816 = process.env.VCAP_URL29816 || 'https://somesv29816.example.com/getData';
const EXT_SVCURL23341 = process.env.VCAP_URL23341 || 'https://somesv23341.example.com/getData';
const EXT_SVCURL15147 = process.env.VCAP_URL15147 || 'https://somesv15147.example.com/getData';
const EXT_SVCURL31040 = process.env.VCAP_URL31040 || 'https://somesv31040.example.com/getData';
const EXT_SVCURL15281 = process.env.VCAP_URL15281 || 'https://somesv15281.example.com/getData';
const EXT_SVCURL8581 = process.env.VCAP_URL8581 || 'https://somesv8581.example.com/getData';
const EXT_SVCURL19925 = process.env.VCAP_URL19925 || 'https://somesv19925.example.com/getData';
const EXT_SVCURL23993 = process.env.VCAP_URL23993 || 'https://somesv23993.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15516</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));