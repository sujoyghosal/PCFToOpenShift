const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27356;
const EXT_SVCURL33193 = process.env.VCAP_URL33193 || 'https://somesv33193.example.com/getData';
const EXT_SVCURL27769 = process.env.VCAP_URL27769 || 'https://somesv27769.example.com/getData';
const EXT_SVCURL22275 = process.env.VCAP_URL22275 || 'https://somesv22275.example.com/getData';
const EXT_SVCURL15249 = process.env.VCAP_URL15249 || 'https://somesv15249.example.com/getData';
const EXT_SVCURL8998 = process.env.VCAP_URL8998 || 'https://somesv8998.example.com/getData';
const EXT_SVCURL31338 = process.env.VCAP_URL31338 || 'https://somesv31338.example.com/getData';
const EXT_SVCURL28179 = process.env.VCAP_URL28179 || 'https://somesv28179.example.com/getData';
const EXT_SVCURL15898 = process.env.VCAP_URL15898 || 'https://somesv15898.example.com/getData';
const EXT_SVCURL7706 = process.env.VCAP_URL7706 || 'https://somesv7706.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27356</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
