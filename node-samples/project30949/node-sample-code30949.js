const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 30949;
const EXT_SVCURL14474 = process.env.VCAP_URL14474 || 'https://somesv14474.example.com/getData';
const EXT_SVCURL28531 = process.env.VCAP_URL28531 || 'https://somesv28531.example.com/getData';
const EXT_SVCURL10653 = process.env.VCAP_URL10653 || 'https://somesv10653.example.com/getData';
const EXT_SVCURL14049 = process.env.VCAP_URL14049 || 'https://somesv14049.example.com/getData';
const EXT_SVCURL22262 = process.env.VCAP_URL22262 || 'https://somesv22262.example.com/getData';
const EXT_SVCURL33486 = process.env.VCAP_URL33486 || 'https://somesv33486.example.com/getData';
const EXT_SVCURL33613 = process.env.VCAP_URL33613 || 'https://somesv33613.example.com/getData';
const EXT_SVCURL26349 = process.env.VCAP_URL26349 || 'https://somesv26349.example.com/getData';
const EXT_SVCURL32704 = process.env.VCAP_URL32704 || 'https://somesv32704.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #30949</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
