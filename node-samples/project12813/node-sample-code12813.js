const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12813;
const EXT_SVCURL16770 = process.env.VCAP_URL16770 || 'https://somesv16770.example.com/getData';
const EXT_SVCURL29664 = process.env.VCAP_URL29664 || 'https://somesv29664.example.com/getData';
const EXT_SVCURL25910 = process.env.VCAP_URL25910 || 'https://somesv25910.example.com/getData';
const EXT_SVCURL25151 = process.env.VCAP_URL25151 || 'https://somesv25151.example.com/getData';
const EXT_SVCURL10479 = process.env.VCAP_URL10479 || 'https://somesv10479.example.com/getData';
const EXT_SVCURL6956 = process.env.VCAP_URL6956 || 'https://somesv6956.example.com/getData';
const EXT_SVCURL22887 = process.env.VCAP_URL22887 || 'https://somesv22887.example.com/getData';
const EXT_SVCURL25722 = process.env.VCAP_URL25722 || 'https://somesv25722.example.com/getData';
const EXT_SVCURL21248 = process.env.VCAP_URL21248 || 'https://somesv21248.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12813</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
