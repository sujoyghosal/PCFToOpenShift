const PORT = process.env.PORT || 33241;
const http = require("http");
const express = require("express");
const EXT_SVCURL25792 = process.env.VCAP_URL25792 || 'https://somesvc25792.example.com/getData';
const DB_URL25792 = process.env.DB_URL25792 || 'https://somedb25792.example.com/getData';
const EXT_SVCURL6415 = process.env.VCAP_URL6415 || 'https://somesvc6415.example.com/getData';
const DB_URL6415 = process.env.DB_URL6415 || 'https://somedb6415.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #33241</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
