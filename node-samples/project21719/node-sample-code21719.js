const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21719;
const EXT_SVCURL26319 = process.env.VCAP_URL26319 || 'https://somesvc26319.example.com/getData';
const DB_URL26319 = process.env.DB_URL26319 || 'https://somedb26319.example.com/getData';
const EXT_SVCURL11305 = process.env.VCAP_URL11305 || 'https://somesvc11305.example.com/getData';
const DB_URL11305 = process.env.DB_URL11305 || 'https://somedb11305.example.com/getData';
const EXT_SVCURL20004 = process.env.VCAP_URL20004 || 'https://somesvc20004.example.com/getData';
const DB_URL20004 = process.env.DB_URL20004 || 'https://somedb20004.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21719</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));