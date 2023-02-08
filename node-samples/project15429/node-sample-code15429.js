const PORT = process.env.PORT || 15429;
const http = require("http");
const express = require("express");
const EXT_SVCURL6665 = process.env.VCAP_URL6665 || 'https://somesvc6665.example.com/getData';
const DB_URL6665 = process.env.DB_URL6665 || 'https://somedb6665.example.com/getData';
const EXT_SVCURL16889 = process.env.VCAP_URL16889 || 'https://somesvc16889.example.com/getData';
const DB_URL16889 = process.env.DB_URL16889 || 'https://somedb16889.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15429</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
