const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18150;
const EXT_SVCURL4885 = process.env.VCAP_URL4885 || 'https://somesv4885.example.com/getData';
const EXT_SVCURL16149 = process.env.VCAP_URL16149 || 'https://somesv16149.example.com/getData';
const EXT_SVCURL6540 = process.env.VCAP_URL6540 || 'https://somesv6540.example.com/getData';
const EXT_SVCURL11246 = process.env.VCAP_URL11246 || 'https://somesv11246.example.com/getData';
const EXT_SVCURL4911 = process.env.VCAP_URL4911 || 'https://somesv4911.example.com/getData';
const EXT_SVCURL6579 = process.env.VCAP_URL6579 || 'https://somesv6579.example.com/getData';
const EXT_SVCURL16056 = process.env.VCAP_URL16056 || 'https://somesv16056.example.com/getData';
const EXT_SVCURL18495 = process.env.VCAP_URL18495 || 'https://somesv18495.example.com/getData';
const EXT_SVCURL15961 = process.env.VCAP_URL15961 || 'https://somesv15961.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18150</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));