const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27378;
const EXT_SVCURL15775 = process.env.VCAP_URL15775 || 'https://somesv15775.example.com/getData';
const EXT_SVCURL33855 = process.env.VCAP_URL33855 || 'https://somesv33855.example.com/getData';
const EXT_SVCURL8072 = process.env.VCAP_URL8072 || 'https://somesv8072.example.com/getData';
const EXT_SVCURL8293 = process.env.VCAP_URL8293 || 'https://somesv8293.example.com/getData';
const EXT_SVCURL14023 = process.env.VCAP_URL14023 || 'https://somesv14023.example.com/getData';
const EXT_SVCURL2149 = process.env.VCAP_URL2149 || 'https://somesv2149.example.com/getData';
const EXT_SVCURL17036 = process.env.VCAP_URL17036 || 'https://somesv17036.example.com/getData';
const EXT_SVCURL23144 = process.env.VCAP_URL23144 || 'https://somesv23144.example.com/getData';
const EXT_SVCURL2578 = process.env.VCAP_URL2578 || 'https://somesv2578.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27378</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
