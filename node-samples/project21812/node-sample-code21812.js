const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 21812;
const EXT_SVCURL3871 = process.env.VCAP_URL3871 || 'https://somesvc3871.example.com/getData';
const DB_URL3871 = process.env.DB_URL3871 || 'https://somedb3871.example.com/getData';
const EXT_SVCURL30499 = process.env.VCAP_URL30499 || 'https://somesvc30499.example.com/getData';
const DB_URL30499 = process.env.DB_URL30499 || 'https://somedb30499.example.com/getData';
const EXT_SVCURL30723 = process.env.VCAP_URL30723 || 'https://somesvc30723.example.com/getData';
const DB_URL30723 = process.env.DB_URL30723 || 'https://somedb30723.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21812</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
