const PORT = process.env.PORT || 37492;
const http = require("http");
const express = require("express");
const EXT_SVCURL20114 = process.env.VCAP_URL20114 || 'https://somesvc20114.example.com/getData';
const DB_URL20114 = process.env.DB_URL20114 || 'https://somedb20114.example.com/getData';
const EXT_SVCURL32107 = process.env.VCAP_URL32107 || 'https://somesvc32107.example.com/getData';
const DB_URL32107 = process.env.DB_URL32107 || 'https://somedb32107.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #37492</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
