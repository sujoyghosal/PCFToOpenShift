const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28657;
const EXT_SVCURL14106 = process.env.VCAP_URL14106 || 'https://somesv14106.example.com/getData';
const EXT_SVCURL32137 = process.env.VCAP_URL32137 || 'https://somesv32137.example.com/getData';
const EXT_SVCURL9039 = process.env.VCAP_URL9039 || 'https://somesv9039.example.com/getData';
const EXT_SVCURL9971 = process.env.VCAP_URL9971 || 'https://somesv9971.example.com/getData';
const EXT_SVCURL29778 = process.env.VCAP_URL29778 || 'https://somesv29778.example.com/getData';
const EXT_SVCURL22224 = process.env.VCAP_URL22224 || 'https://somesv22224.example.com/getData';
const EXT_SVCURL13128 = process.env.VCAP_URL13128 || 'https://somesv13128.example.com/getData';
const EXT_SVCURL28757 = process.env.VCAP_URL28757 || 'https://somesv28757.example.com/getData';
const EXT_SVCURL13764 = process.env.VCAP_URL13764 || 'https://somesv13764.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28657</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
