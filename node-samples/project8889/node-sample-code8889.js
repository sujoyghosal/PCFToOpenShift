const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 8889;
const EXT_SVCURL2809 = process.env.VCAP_URL2809 || 'https://somesv2809.example.com/getData';
const EXT_SVCURL27018 = process.env.VCAP_URL27018 || 'https://somesv27018.example.com/getData';
const EXT_SVCURL8427 = process.env.VCAP_URL8427 || 'https://somesv8427.example.com/getData';
const EXT_SVCURL6150 = process.env.VCAP_URL6150 || 'https://somesv6150.example.com/getData';
const EXT_SVCURL6636 = process.env.VCAP_URL6636 || 'https://somesv6636.example.com/getData';
const EXT_SVCURL9105 = process.env.VCAP_URL9105 || 'https://somesv9105.example.com/getData';
const EXT_SVCURL18451 = process.env.VCAP_URL18451 || 'https://somesv18451.example.com/getData';
const EXT_SVCURL26654 = process.env.VCAP_URL26654 || 'https://somesv26654.example.com/getData';
const EXT_SVCURL24694 = process.env.VCAP_URL24694 || 'https://somesv24694.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8889</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
