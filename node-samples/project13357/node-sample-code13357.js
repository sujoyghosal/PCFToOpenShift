const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 13357;
const EXT_SVCURL30865 = process.env.VCAP_URL30865 || 'https://somesvc30865.example.com/getData';
const DB_URL30865 = process.env.DB_URL30865 || 'https://somedb30865.example.com/getData';
const EXT_SVCURL16921 = process.env.VCAP_URL16921 || 'https://somesvc16921.example.com/getData';
const DB_URL16921 = process.env.DB_URL16921 || 'https://somedb16921.example.com/getData';
const EXT_SVCURL34113 = process.env.VCAP_URL34113 || 'https://somesvc34113.example.com/getData';
const DB_URL34113 = process.env.DB_URL34113 || 'https://somedb34113.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13357</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));