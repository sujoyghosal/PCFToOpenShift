const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6889;
const EXT_SVCURL7725 = process.env.VCAP_URL7725 || 'https://somesv7725.example.com/getData';
const EXT_SVCURL18207 = process.env.VCAP_URL18207 || 'https://somesv18207.example.com/getData';
const EXT_SVCURL20721 = process.env.VCAP_URL20721 || 'https://somesv20721.example.com/getData';
const EXT_SVCURL20363 = process.env.VCAP_URL20363 || 'https://somesv20363.example.com/getData';
const EXT_SVCURL3784 = process.env.VCAP_URL3784 || 'https://somesv3784.example.com/getData';
const EXT_SVCURL4244 = process.env.VCAP_URL4244 || 'https://somesv4244.example.com/getData';
const EXT_SVCURL8131 = process.env.VCAP_URL8131 || 'https://somesv8131.example.com/getData';
const EXT_SVCURL3597 = process.env.VCAP_URL3597 || 'https://somesv3597.example.com/getData';
const EXT_SVCURL22559 = process.env.VCAP_URL22559 || 'https://somesv22559.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6889</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
