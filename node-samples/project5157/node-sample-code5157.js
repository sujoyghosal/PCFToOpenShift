const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5157;
const EXT_SVCURL9653 = process.env.VCAP_URL9653 || 'https://somesv9653.example.com/getData';
const EXT_SVCURL33922 = process.env.VCAP_URL33922 || 'https://somesv33922.example.com/getData';
const EXT_SVCURL26387 = process.env.VCAP_URL26387 || 'https://somesv26387.example.com/getData';
const EXT_SVCURL22942 = process.env.VCAP_URL22942 || 'https://somesv22942.example.com/getData';
const EXT_SVCURL14606 = process.env.VCAP_URL14606 || 'https://somesv14606.example.com/getData';
const EXT_SVCURL22806 = process.env.VCAP_URL22806 || 'https://somesv22806.example.com/getData';
const EXT_SVCURL27526 = process.env.VCAP_URL27526 || 'https://somesv27526.example.com/getData';
const EXT_SVCURL17355 = process.env.VCAP_URL17355 || 'https://somesv17355.example.com/getData';
const EXT_SVCURL4141 = process.env.VCAP_URL4141 || 'https://somesv4141.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5157</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
