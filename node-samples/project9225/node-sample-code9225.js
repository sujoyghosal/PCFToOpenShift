const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 9225;
const EXT_SVCURL11797 = process.env.VCAP_URL11797 || 'https://somesv11797.example.com/getData';
const EXT_SVCURL14269 = process.env.VCAP_URL14269 || 'https://somesv14269.example.com/getData';
const EXT_SVCURL2003 = process.env.VCAP_URL2003 || 'https://somesv2003.example.com/getData';
const EXT_SVCURL8212 = process.env.VCAP_URL8212 || 'https://somesv8212.example.com/getData';
const EXT_SVCURL22353 = process.env.VCAP_URL22353 || 'https://somesv22353.example.com/getData';
const EXT_SVCURL23826 = process.env.VCAP_URL23826 || 'https://somesv23826.example.com/getData';
const EXT_SVCURL26904 = process.env.VCAP_URL26904 || 'https://somesv26904.example.com/getData';
const EXT_SVCURL18188 = process.env.VCAP_URL18188 || 'https://somesv18188.example.com/getData';
const EXT_SVCURL4229 = process.env.VCAP_URL4229 || 'https://somesv4229.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9225</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
