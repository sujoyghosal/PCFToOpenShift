const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 11597;
const EXT_SVCURL8196 = process.env.VCAP_URL8196 || 'https://somesv8196.example.com/getData';
const EXT_SVCURL18576 = process.env.VCAP_URL18576 || 'https://somesv18576.example.com/getData';
const EXT_SVCURL22110 = process.env.VCAP_URL22110 || 'https://somesv22110.example.com/getData';
const EXT_SVCURL24081 = process.env.VCAP_URL24081 || 'https://somesv24081.example.com/getData';
const EXT_SVCURL16052 = process.env.VCAP_URL16052 || 'https://somesv16052.example.com/getData';
const EXT_SVCURL14118 = process.env.VCAP_URL14118 || 'https://somesv14118.example.com/getData';
const EXT_SVCURL14758 = process.env.VCAP_URL14758 || 'https://somesv14758.example.com/getData';
const EXT_SVCURL2009 = process.env.VCAP_URL2009 || 'https://somesv2009.example.com/getData';
const EXT_SVCURL10281 = process.env.VCAP_URL10281 || 'https://somesv10281.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #11597</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));