const PORT = process.env.PORT || 15293;
const http = require("http");
const express = require("express");
const EXT_SVCURL28018 = process.env.VCAP_URL28018 || 'https://somesvc28018.example.com/getData';
const DB_URL28018 = process.env.DB_URL28018 || 'https://somedb28018.example.com/getData';
const EXT_SVCURL10523 = process.env.VCAP_URL10523 || 'https://somesvc10523.example.com/getData';
const DB_URL10523 = process.env.DB_URL10523 || 'https://somedb10523.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15293</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
