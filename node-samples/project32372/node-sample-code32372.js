const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 32372;
const EXT_SVCURL28305 = process.env.VCAP_URL28305 || 'https://somesv28305.example.com/getData';
const EXT_SVCURL22331 = process.env.VCAP_URL22331 || 'https://somesv22331.example.com/getData';
const EXT_SVCURL34044 = process.env.VCAP_URL34044 || 'https://somesv34044.example.com/getData';
const EXT_SVCURL2915 = process.env.VCAP_URL2915 || 'https://somesv2915.example.com/getData';
const EXT_SVCURL23019 = process.env.VCAP_URL23019 || 'https://somesv23019.example.com/getData';
const EXT_SVCURL28444 = process.env.VCAP_URL28444 || 'https://somesv28444.example.com/getData';
const EXT_SVCURL26088 = process.env.VCAP_URL26088 || 'https://somesv26088.example.com/getData';
const EXT_SVCURL24938 = process.env.VCAP_URL24938 || 'https://somesv24938.example.com/getData';
const EXT_SVCURL2779 = process.env.VCAP_URL2779 || 'https://somesv2779.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #32372</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
