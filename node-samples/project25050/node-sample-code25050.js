const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 25050;
const EXT_SVCURL6766 = process.env.VCAP_URL6766 || 'https://somesv6766.example.com/getData';
const EXT_SVCURL7098 = process.env.VCAP_URL7098 || 'https://somesv7098.example.com/getData';
const EXT_SVCURL33883 = process.env.VCAP_URL33883 || 'https://somesv33883.example.com/getData';
const EXT_SVCURL11156 = process.env.VCAP_URL11156 || 'https://somesv11156.example.com/getData';
const EXT_SVCURL15360 = process.env.VCAP_URL15360 || 'https://somesv15360.example.com/getData';
const EXT_SVCURL29941 = process.env.VCAP_URL29941 || 'https://somesv29941.example.com/getData';
const EXT_SVCURL25425 = process.env.VCAP_URL25425 || 'https://somesv25425.example.com/getData';
const EXT_SVCURL19615 = process.env.VCAP_URL19615 || 'https://somesv19615.example.com/getData';
const EXT_SVCURL14820 = process.env.VCAP_URL14820 || 'https://somesv14820.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25050</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
