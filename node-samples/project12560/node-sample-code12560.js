const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12560;
const EXT_SVCURL13963 = process.env.VCAP_URL13963 || 'https://somesv13963.example.com/getData';
const EXT_SVCURL8631 = process.env.VCAP_URL8631 || 'https://somesv8631.example.com/getData';
const EXT_SVCURL5954 = process.env.VCAP_URL5954 || 'https://somesv5954.example.com/getData';
const EXT_SVCURL22657 = process.env.VCAP_URL22657 || 'https://somesv22657.example.com/getData';
const EXT_SVCURL13147 = process.env.VCAP_URL13147 || 'https://somesv13147.example.com/getData';
const EXT_SVCURL8765 = process.env.VCAP_URL8765 || 'https://somesv8765.example.com/getData';
const EXT_SVCURL31276 = process.env.VCAP_URL31276 || 'https://somesv31276.example.com/getData';
const EXT_SVCURL5707 = process.env.VCAP_URL5707 || 'https://somesv5707.example.com/getData';
const EXT_SVCURL26016 = process.env.VCAP_URL26016 || 'https://somesv26016.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12560</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
