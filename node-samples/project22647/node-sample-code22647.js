const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 22647;
const EXT_SVCURL32110 = process.env.VCAP_URL32110 || 'https://somesv32110.example.com/getData';
const EXT_SVCURL3986 = process.env.VCAP_URL3986 || 'https://somesv3986.example.com/getData';
const EXT_SVCURL28295 = process.env.VCAP_URL28295 || 'https://somesv28295.example.com/getData';
const EXT_SVCURL26016 = process.env.VCAP_URL26016 || 'https://somesv26016.example.com/getData';
const EXT_SVCURL13048 = process.env.VCAP_URL13048 || 'https://somesv13048.example.com/getData';
const EXT_SVCURL4982 = process.env.VCAP_URL4982 || 'https://somesv4982.example.com/getData';
const EXT_SVCURL2022 = process.env.VCAP_URL2022 || 'https://somesv2022.example.com/getData';
const EXT_SVCURL26199 = process.env.VCAP_URL26199 || 'https://somesv26199.example.com/getData';
const EXT_SVCURL21072 = process.env.VCAP_URL21072 || 'https://somesv21072.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #22647</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));