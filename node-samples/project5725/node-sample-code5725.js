const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 5725;
const EXT_SVCURL24000 = process.env.VCAP_URL24000 || 'https://somesvc24000.example.com/getData';
const DB_URL24000 = process.env.DB_URL24000 || 'https://somedb24000.example.com/getData';
const EXT_SVCURL18989 = process.env.VCAP_URL18989 || 'https://somesvc18989.example.com/getData';
const DB_URL18989 = process.env.DB_URL18989 || 'https://somedb18989.example.com/getData';
const EXT_SVCURL24853 = process.env.VCAP_URL24853 || 'https://somesvc24853.example.com/getData';
const DB_URL24853 = process.env.DB_URL24853 || 'https://somedb24853.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5725</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
