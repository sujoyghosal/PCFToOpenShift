const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 33245;
const EXT_SVCURL21738 = process.env.VCAP_URL21738 || 'https://somesvc21738.example.com/getData';
const DB_URL21738 = process.env.DB_URL21738 || 'https://somedb21738.example.com/getData';
const EXT_SVCURL34446 = process.env.VCAP_URL34446 || 'https://somesvc34446.example.com/getData';
const DB_URL34446 = process.env.DB_URL34446 || 'https://somedb34446.example.com/getData';
const EXT_SVCURL11342 = process.env.VCAP_URL11342 || 'https://somesvc11342.example.com/getData';
const DB_URL11342 = process.env.DB_URL11342 || 'https://somedb11342.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33245</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
