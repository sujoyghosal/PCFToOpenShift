const PORT = process.env.PORT || 9869;
const http = require("http");
const express = require("express");
const EXT_SVCURL5170 = process.env.VCAP_URL5170 || 'https://somesvc5170.example.com/getData';
const DB_URL5170 = process.env.DB_URL5170 || 'https://somedb5170.example.com/getData';
const EXT_SVCURL17248 = process.env.VCAP_URL17248 || 'https://somesvc17248.example.com/getData';
const DB_URL17248 = process.env.DB_URL17248 || 'https://somedb17248.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #9869</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
