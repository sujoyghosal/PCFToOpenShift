const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18846;
const EXT_SVCURL11207 = process.env.VCAP_URL11207 || 'https://somesv11207.example.com/getData';
const EXT_SVCURL25584 = process.env.VCAP_URL25584 || 'https://somesv25584.example.com/getData';
const EXT_SVCURL32942 = process.env.VCAP_URL32942 || 'https://somesv32942.example.com/getData';
const EXT_SVCURL18956 = process.env.VCAP_URL18956 || 'https://somesv18956.example.com/getData';
const EXT_SVCURL28269 = process.env.VCAP_URL28269 || 'https://somesv28269.example.com/getData';
const EXT_SVCURL18951 = process.env.VCAP_URL18951 || 'https://somesv18951.example.com/getData';
const EXT_SVCURL30842 = process.env.VCAP_URL30842 || 'https://somesv30842.example.com/getData';
const EXT_SVCURL6764 = process.env.VCAP_URL6764 || 'https://somesv6764.example.com/getData';
const EXT_SVCURL34063 = process.env.VCAP_URL34063 || 'https://somesv34063.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18846</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
