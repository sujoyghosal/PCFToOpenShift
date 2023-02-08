const PORT = process.env.PORT || 18518;
const http = require("http");
const express = require("express");
const EXT_SVCURL34183 = process.env.VCAP_URL34183 || 'https://somesvc34183.example.com/getData';
const DB_URL34183 = process.env.DB_URL34183 || 'https://somedb34183.example.com/getData';
const EXT_SVCURL7647 = process.env.VCAP_URL7647 || 'https://somesvc7647.example.com/getData';
const DB_URL7647 = process.env.DB_URL7647 || 'https://somedb7647.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18518</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
