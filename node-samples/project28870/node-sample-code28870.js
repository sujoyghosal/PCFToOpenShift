const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 28870;
const EXT_SVCURL15029 = process.env.VCAP_URL15029 || 'https://somesv15029.example.com/getData';
const EXT_SVCURL4595 = process.env.VCAP_URL4595 || 'https://somesv4595.example.com/getData';
const EXT_SVCURL30734 = process.env.VCAP_URL30734 || 'https://somesv30734.example.com/getData';
const EXT_SVCURL17031 = process.env.VCAP_URL17031 || 'https://somesv17031.example.com/getData';
const EXT_SVCURL18338 = process.env.VCAP_URL18338 || 'https://somesv18338.example.com/getData';
const EXT_SVCURL10449 = process.env.VCAP_URL10449 || 'https://somesv10449.example.com/getData';
const EXT_SVCURL2417 = process.env.VCAP_URL2417 || 'https://somesv2417.example.com/getData';
const EXT_SVCURL6674 = process.env.VCAP_URL6674 || 'https://somesv6674.example.com/getData';
const EXT_SVCURL7700 = process.env.VCAP_URL7700 || 'https://somesv7700.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #28870</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));