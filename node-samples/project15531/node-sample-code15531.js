const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15531;
const EXT_SVCURL28783 = process.env.VCAP_URL28783 || 'https://somesv28783.example.com/getData';
const EXT_SVCURL18590 = process.env.VCAP_URL18590 || 'https://somesv18590.example.com/getData';
const EXT_SVCURL15297 = process.env.VCAP_URL15297 || 'https://somesv15297.example.com/getData';
const EXT_SVCURL4498 = process.env.VCAP_URL4498 || 'https://somesv4498.example.com/getData';
const EXT_SVCURL8117 = process.env.VCAP_URL8117 || 'https://somesv8117.example.com/getData';
const EXT_SVCURL30115 = process.env.VCAP_URL30115 || 'https://somesv30115.example.com/getData';
const EXT_SVCURL29218 = process.env.VCAP_URL29218 || 'https://somesv29218.example.com/getData';
const EXT_SVCURL28194 = process.env.VCAP_URL28194 || 'https://somesv28194.example.com/getData';
const EXT_SVCURL14586 = process.env.VCAP_URL14586 || 'https://somesv14586.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15531</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));