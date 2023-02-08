const PORT = process.env.PORT || 36887;
const http = require("http");
const express = require("express");
const EXT_SVCURL18868 = process.env.VCAP_URL18868 || 'https://somesvc18868.example.com/getData';
const DB_URL18868 = process.env.DB_URL18868 || 'https://somedb18868.example.com/getData';
const EXT_SVCURL19892 = process.env.VCAP_URL19892 || 'https://somesvc19892.example.com/getData';
const DB_URL19892 = process.env.DB_URL19892 || 'https://somedb19892.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36887</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
