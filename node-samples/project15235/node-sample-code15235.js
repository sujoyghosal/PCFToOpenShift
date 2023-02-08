const PORT = process.env.PORT || 15235;
const http = require("http");
const express = require("express");
const EXT_SVCURL11884 = process.env.VCAP_URL11884 || 'https://somesvc11884.example.com/getData';
const DB_URL11884 = process.env.DB_URL11884 || 'https://somedb11884.example.com/getData';
const EXT_SVCURL15832 = process.env.VCAP_URL15832 || 'https://somesvc15832.example.com/getData';
const DB_URL15832 = process.env.DB_URL15832 || 'https://somedb15832.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #15235</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
