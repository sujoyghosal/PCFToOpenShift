const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 13913;
const EXT_SVCURL16335 = process.env.VCAP_URL16335 || 'https://somesv16335.example.com/getData';
const EXT_SVCURL20285 = process.env.VCAP_URL20285 || 'https://somesv20285.example.com/getData';
const EXT_SVCURL30292 = process.env.VCAP_URL30292 || 'https://somesv30292.example.com/getData';
const EXT_SVCURL6807 = process.env.VCAP_URL6807 || 'https://somesv6807.example.com/getData';
const EXT_SVCURL3458 = process.env.VCAP_URL3458 || 'https://somesv3458.example.com/getData';
const EXT_SVCURL22791 = process.env.VCAP_URL22791 || 'https://somesv22791.example.com/getData';
const EXT_SVCURL15003 = process.env.VCAP_URL15003 || 'https://somesv15003.example.com/getData';
const EXT_SVCURL25602 = process.env.VCAP_URL25602 || 'https://somesv25602.example.com/getData';
const EXT_SVCURL24741 = process.env.VCAP_URL24741 || 'https://somesv24741.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13913</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
