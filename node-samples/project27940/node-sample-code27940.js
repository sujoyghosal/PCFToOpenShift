const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27940;
const EXT_SVCURL32314 = process.env.VCAP_URL32314 || 'https://somesvc32314.example.com/getData';
const DB_URL32314 = process.env.DB_URL32314 || 'https://somedb32314.example.com/getData';
const EXT_SVCURL17224 = process.env.VCAP_URL17224 || 'https://somesvc17224.example.com/getData';
const DB_URL17224 = process.env.DB_URL17224 || 'https://somedb17224.example.com/getData';
const EXT_SVCURL11982 = process.env.VCAP_URL11982 || 'https://somesvc11982.example.com/getData';
const DB_URL11982 = process.env.DB_URL11982 || 'https://somedb11982.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27940</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
