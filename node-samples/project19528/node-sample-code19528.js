const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 19528;
const EXT_SVCURL9603 = process.env.VCAP_URL9603 || 'https://somesv9603.example.com/getData';
const EXT_SVCURL15152 = process.env.VCAP_URL15152 || 'https://somesv15152.example.com/getData';
const EXT_SVCURL6082 = process.env.VCAP_URL6082 || 'https://somesv6082.example.com/getData';
const EXT_SVCURL12440 = process.env.VCAP_URL12440 || 'https://somesv12440.example.com/getData';
const EXT_SVCURL8438 = process.env.VCAP_URL8438 || 'https://somesv8438.example.com/getData';
const EXT_SVCURL22068 = process.env.VCAP_URL22068 || 'https://somesv22068.example.com/getData';
const EXT_SVCURL12039 = process.env.VCAP_URL12039 || 'https://somesv12039.example.com/getData';
const EXT_SVCURL29145 = process.env.VCAP_URL29145 || 'https://somesv29145.example.com/getData';
const EXT_SVCURL9912 = process.env.VCAP_URL9912 || 'https://somesv9912.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #19528</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
