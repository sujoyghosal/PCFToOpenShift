const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33809;
const EXT_SVCURL30702 = process.env.VCAP_URL30702 || 'https://somesv30702.example.com/getData';
const EXT_SVCURL14130 = process.env.VCAP_URL14130 || 'https://somesv14130.example.com/getData';
const EXT_SVCURL21407 = process.env.VCAP_URL21407 || 'https://somesv21407.example.com/getData';
const EXT_SVCURL4783 = process.env.VCAP_URL4783 || 'https://somesv4783.example.com/getData';
const EXT_SVCURL2779 = process.env.VCAP_URL2779 || 'https://somesv2779.example.com/getData';
const EXT_SVCURL7831 = process.env.VCAP_URL7831 || 'https://somesv7831.example.com/getData';
const EXT_SVCURL34247 = process.env.VCAP_URL34247 || 'https://somesv34247.example.com/getData';
const EXT_SVCURL19257 = process.env.VCAP_URL19257 || 'https://somesv19257.example.com/getData';
const EXT_SVCURL19102 = process.env.VCAP_URL19102 || 'https://somesv19102.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33809</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));