const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12103;
const EXT_SVCURL28707 = process.env.VCAP_URL28707 || 'https://somesvc28707.example.com/getData';
const DB_URL28707 = process.env.DB_URL28707 || 'https://somedb28707.example.com/getData';
const EXT_SVCURL3551 = process.env.VCAP_URL3551 || 'https://somesvc3551.example.com/getData';
const DB_URL3551 = process.env.DB_URL3551 || 'https://somedb3551.example.com/getData';
const EXT_SVCURL30409 = process.env.VCAP_URL30409 || 'https://somesvc30409.example.com/getData';
const DB_URL30409 = process.env.DB_URL30409 || 'https://somedb30409.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12103</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
