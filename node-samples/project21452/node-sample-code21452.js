const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21452;
const EXT_SVCURL11986 = process.env.VCAP_URL11986 || 'https://somesvc11986.example.com/getData';
const DB_URL11986 = process.env.DB_URL11986 || 'https://somedb11986.example.com/getData';
const EXT_SVCURL32875 = process.env.VCAP_URL32875 || 'https://somesvc32875.example.com/getData';
const DB_URL32875 = process.env.DB_URL32875 || 'https://somedb32875.example.com/getData';
const EXT_SVCURL15024 = process.env.VCAP_URL15024 || 'https://somesvc15024.example.com/getData';
const DB_URL15024 = process.env.DB_URL15024 || 'https://somedb15024.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21452</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));