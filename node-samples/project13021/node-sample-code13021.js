const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 13021;
const EXT_SVCURL9371 = process.env.VCAP_URL9371 || 'https://somesvc9371.example.com/getData';
const DB_URL9371 = process.env.DB_URL9371 || 'https://somedb9371.example.com/getData';
const EXT_SVCURL18714 = process.env.VCAP_URL18714 || 'https://somesvc18714.example.com/getData';
const DB_URL18714 = process.env.DB_URL18714 || 'https://somedb18714.example.com/getData';
const EXT_SVCURL15834 = process.env.VCAP_URL15834 || 'https://somesvc15834.example.com/getData';
const DB_URL15834 = process.env.DB_URL15834 || 'https://somedb15834.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13021</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
