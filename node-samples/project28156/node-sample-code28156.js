const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28156;
const EXT_SVCURL4691 = process.env.VCAP_URL4691 || 'https://somesv4691.example.com/getData';
const EXT_SVCURL23077 = process.env.VCAP_URL23077 || 'https://somesv23077.example.com/getData';
const EXT_SVCURL6267 = process.env.VCAP_URL6267 || 'https://somesv6267.example.com/getData';
const EXT_SVCURL28911 = process.env.VCAP_URL28911 || 'https://somesv28911.example.com/getData';
const EXT_SVCURL8965 = process.env.VCAP_URL8965 || 'https://somesv8965.example.com/getData';
const EXT_SVCURL25087 = process.env.VCAP_URL25087 || 'https://somesv25087.example.com/getData';
const EXT_SVCURL27267 = process.env.VCAP_URL27267 || 'https://somesv27267.example.com/getData';
const EXT_SVCURL30705 = process.env.VCAP_URL30705 || 'https://somesv30705.example.com/getData';
const EXT_SVCURL19004 = process.env.VCAP_URL19004 || 'https://somesv19004.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28156</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));