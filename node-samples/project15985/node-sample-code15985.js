const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 15985;
const EXT_SVCURL30169 = process.env.VCAP_URL30169 || 'https://somesv30169.example.com/getData';
const EXT_SVCURL34296 = process.env.VCAP_URL34296 || 'https://somesv34296.example.com/getData';
const EXT_SVCURL2822 = process.env.VCAP_URL2822 || 'https://somesv2822.example.com/getData';
const EXT_SVCURL10108 = process.env.VCAP_URL10108 || 'https://somesv10108.example.com/getData';
const EXT_SVCURL27260 = process.env.VCAP_URL27260 || 'https://somesv27260.example.com/getData';
const EXT_SVCURL31764 = process.env.VCAP_URL31764 || 'https://somesv31764.example.com/getData';
const EXT_SVCURL23084 = process.env.VCAP_URL23084 || 'https://somesv23084.example.com/getData';
const EXT_SVCURL30317 = process.env.VCAP_URL30317 || 'https://somesv30317.example.com/getData';
const EXT_SVCURL7792 = process.env.VCAP_URL7792 || 'https://somesv7792.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15985</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));