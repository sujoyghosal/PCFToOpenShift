const PORT = process.env.PORT || 17162;
const http = require("http");
const express = require("express");
const EXT_SVCURL33616 = process.env.VCAP_URL33616 || 'https://somesvc33616.example.com/getData';
const DB_URL33616 = process.env.DB_URL33616 || 'https://somedb33616.example.com/getData';
const EXT_SVCURL34747 = process.env.VCAP_URL34747 || 'https://somesvc34747.example.com/getData';
const DB_URL34747 = process.env.DB_URL34747 || 'https://somedb34747.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #17162</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
