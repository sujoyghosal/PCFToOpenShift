const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 16420;
const EXT_SVCURL5055 = process.env.VCAP_URL5055 || 'https://somesv5055.example.com/getData';
const EXT_SVCURL24539 = process.env.VCAP_URL24539 || 'https://somesv24539.example.com/getData';
const EXT_SVCURL32941 = process.env.VCAP_URL32941 || 'https://somesv32941.example.com/getData';
const EXT_SVCURL23788 = process.env.VCAP_URL23788 || 'https://somesv23788.example.com/getData';
const EXT_SVCURL9171 = process.env.VCAP_URL9171 || 'https://somesv9171.example.com/getData';
const EXT_SVCURL8448 = process.env.VCAP_URL8448 || 'https://somesv8448.example.com/getData';
const EXT_SVCURL29347 = process.env.VCAP_URL29347 || 'https://somesv29347.example.com/getData';
const EXT_SVCURL16365 = process.env.VCAP_URL16365 || 'https://somesv16365.example.com/getData';
const EXT_SVCURL20939 = process.env.VCAP_URL20939 || 'https://somesv20939.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16420</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
