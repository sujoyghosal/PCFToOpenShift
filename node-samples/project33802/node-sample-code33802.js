const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33802;
const EXT_SVCURL8006 = process.env.VCAP_URL8006 || 'https://somesv8006.example.com/getData';
const EXT_SVCURL13491 = process.env.VCAP_URL13491 || 'https://somesv13491.example.com/getData';
const EXT_SVCURL8786 = process.env.VCAP_URL8786 || 'https://somesv8786.example.com/getData';
const EXT_SVCURL9117 = process.env.VCAP_URL9117 || 'https://somesv9117.example.com/getData';
const EXT_SVCURL2894 = process.env.VCAP_URL2894 || 'https://somesv2894.example.com/getData';
const EXT_SVCURL18815 = process.env.VCAP_URL18815 || 'https://somesv18815.example.com/getData';
const EXT_SVCURL26406 = process.env.VCAP_URL26406 || 'https://somesv26406.example.com/getData';
const EXT_SVCURL24673 = process.env.VCAP_URL24673 || 'https://somesv24673.example.com/getData';
const EXT_SVCURL27393 = process.env.VCAP_URL27393 || 'https://somesv27393.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33802</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
