const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 36708;
const EXT_SVCURL4451 = process.env.VCAP_URL4451 || 'https://somesv4451.example.com/getData';
const EXT_SVCURL19478 = process.env.VCAP_URL19478 || 'https://somesv19478.example.com/getData';
const EXT_SVCURL6973 = process.env.VCAP_URL6973 || 'https://somesv6973.example.com/getData';
const EXT_SVCURL9242 = process.env.VCAP_URL9242 || 'https://somesv9242.example.com/getData';
const EXT_SVCURL9649 = process.env.VCAP_URL9649 || 'https://somesv9649.example.com/getData';
const EXT_SVCURL29682 = process.env.VCAP_URL29682 || 'https://somesv29682.example.com/getData';
const EXT_SVCURL27430 = process.env.VCAP_URL27430 || 'https://somesv27430.example.com/getData';
const EXT_SVCURL14728 = process.env.VCAP_URL14728 || 'https://somesv14728.example.com/getData';
const EXT_SVCURL3343 = process.env.VCAP_URL3343 || 'https://somesv3343.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36708</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));