const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33392;
const EXT_SVCURL26278 = process.env.VCAP_URL26278 || 'https://somesv26278.example.com/getData';
const EXT_SVCURL6798 = process.env.VCAP_URL6798 || 'https://somesv6798.example.com/getData';
const EXT_SVCURL2819 = process.env.VCAP_URL2819 || 'https://somesv2819.example.com/getData';
const EXT_SVCURL30461 = process.env.VCAP_URL30461 || 'https://somesv30461.example.com/getData';
const EXT_SVCURL9305 = process.env.VCAP_URL9305 || 'https://somesv9305.example.com/getData';
const EXT_SVCURL21552 = process.env.VCAP_URL21552 || 'https://somesv21552.example.com/getData';
const EXT_SVCURL27582 = process.env.VCAP_URL27582 || 'https://somesv27582.example.com/getData';
const EXT_SVCURL24538 = process.env.VCAP_URL24538 || 'https://somesv24538.example.com/getData';
const EXT_SVCURL18193 = process.env.VCAP_URL18193 || 'https://somesv18193.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33392</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));