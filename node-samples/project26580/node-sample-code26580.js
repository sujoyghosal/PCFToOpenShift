const PORT = process.env.PORT || 26580;
const http = require("http");
const express = require("express");
const EXT_SVCURL27243 = process.env.VCAP_URL27243 || 'https://somesvc27243.example.com/getData';
const DB_URL27243 = process.env.DB_URL27243 || 'https://somedb27243.example.com/getData';
const EXT_SVCURL23657 = process.env.VCAP_URL23657 || 'https://somesvc23657.example.com/getData';
const DB_URL23657 = process.env.DB_URL23657 || 'https://somedb23657.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #26580</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
