const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 34950;
const EXT_SVCURL6154 = process.env.VCAP_URL6154 || 'https://somesv6154.example.com/getData';
const EXT_SVCURL16336 = process.env.VCAP_URL16336 || 'https://somesv16336.example.com/getData';
const EXT_SVCURL27767 = process.env.VCAP_URL27767 || 'https://somesv27767.example.com/getData';
const EXT_SVCURL11715 = process.env.VCAP_URL11715 || 'https://somesv11715.example.com/getData';
const EXT_SVCURL18033 = process.env.VCAP_URL18033 || 'https://somesv18033.example.com/getData';
const EXT_SVCURL2893 = process.env.VCAP_URL2893 || 'https://somesv2893.example.com/getData';
const EXT_SVCURL14069 = process.env.VCAP_URL14069 || 'https://somesv14069.example.com/getData';
const EXT_SVCURL31218 = process.env.VCAP_URL31218 || 'https://somesv31218.example.com/getData';
const EXT_SVCURL31144 = process.env.VCAP_URL31144 || 'https://somesv31144.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34950</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));