const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 35677;
const EXT_SVCURL28030 = process.env.VCAP_URL28030 || 'https://somesv28030.example.com/getData';
const EXT_SVCURL30075 = process.env.VCAP_URL30075 || 'https://somesv30075.example.com/getData';
const EXT_SVCURL23436 = process.env.VCAP_URL23436 || 'https://somesv23436.example.com/getData';
const EXT_SVCURL29818 = process.env.VCAP_URL29818 || 'https://somesv29818.example.com/getData';
const EXT_SVCURL29728 = process.env.VCAP_URL29728 || 'https://somesv29728.example.com/getData';
const EXT_SVCURL33938 = process.env.VCAP_URL33938 || 'https://somesv33938.example.com/getData';
const EXT_SVCURL34712 = process.env.VCAP_URL34712 || 'https://somesv34712.example.com/getData';
const EXT_SVCURL7491 = process.env.VCAP_URL7491 || 'https://somesv7491.example.com/getData';
const EXT_SVCURL18848 = process.env.VCAP_URL18848 || 'https://somesv18848.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35677</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
