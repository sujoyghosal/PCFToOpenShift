const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 26725;
const EXT_SVCURL6729 = process.env.VCAP_URL6729 || 'https://somesv6729.example.com/getData';
const EXT_SVCURL15491 = process.env.VCAP_URL15491 || 'https://somesv15491.example.com/getData';
const EXT_SVCURL17224 = process.env.VCAP_URL17224 || 'https://somesv17224.example.com/getData';
const EXT_SVCURL30920 = process.env.VCAP_URL30920 || 'https://somesv30920.example.com/getData';
const EXT_SVCURL9196 = process.env.VCAP_URL9196 || 'https://somesv9196.example.com/getData';
const EXT_SVCURL29458 = process.env.VCAP_URL29458 || 'https://somesv29458.example.com/getData';
const EXT_SVCURL16480 = process.env.VCAP_URL16480 || 'https://somesv16480.example.com/getData';
const EXT_SVCURL10246 = process.env.VCAP_URL10246 || 'https://somesv10246.example.com/getData';
const EXT_SVCURL3233 = process.env.VCAP_URL3233 || 'https://somesv3233.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26725</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));