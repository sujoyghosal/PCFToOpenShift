const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 37546;
const EXT_SVCURL12365 = process.env.VCAP_URL12365 || 'https://somesv12365.example.com/getData';
const EXT_SVCURL11844 = process.env.VCAP_URL11844 || 'https://somesv11844.example.com/getData';
const EXT_SVCURL2525 = process.env.VCAP_URL2525 || 'https://somesv2525.example.com/getData';
const EXT_SVCURL31694 = process.env.VCAP_URL31694 || 'https://somesv31694.example.com/getData';
const EXT_SVCURL12524 = process.env.VCAP_URL12524 || 'https://somesv12524.example.com/getData';
const EXT_SVCURL14160 = process.env.VCAP_URL14160 || 'https://somesv14160.example.com/getData';
const EXT_SVCURL24078 = process.env.VCAP_URL24078 || 'https://somesv24078.example.com/getData';
const EXT_SVCURL23737 = process.env.VCAP_URL23737 || 'https://somesv23737.example.com/getData';
const EXT_SVCURL30514 = process.env.VCAP_URL30514 || 'https://somesv30514.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #37546</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
