const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26358;
const EXT_SVCURL4237 = process.env.VCAP_URL4237 || 'https://somesv4237.example.com/getData';
const EXT_SVCURL21608 = process.env.VCAP_URL21608 || 'https://somesv21608.example.com/getData';
const EXT_SVCURL9380 = process.env.VCAP_URL9380 || 'https://somesv9380.example.com/getData';
const EXT_SVCURL15022 = process.env.VCAP_URL15022 || 'https://somesv15022.example.com/getData';
const EXT_SVCURL15020 = process.env.VCAP_URL15020 || 'https://somesv15020.example.com/getData';
const EXT_SVCURL19275 = process.env.VCAP_URL19275 || 'https://somesv19275.example.com/getData';
const EXT_SVCURL31673 = process.env.VCAP_URL31673 || 'https://somesv31673.example.com/getData';
const EXT_SVCURL15770 = process.env.VCAP_URL15770 || 'https://somesv15770.example.com/getData';
const EXT_SVCURL8113 = process.env.VCAP_URL8113 || 'https://somesv8113.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26358</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));