const PORT = process.env.PORT || 35199;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const EXT_SVCURL32920 = process.env.VCAP_URL32920 || 'https://somesvc32920.example.com/getData';
const DB_URL32920 = process.env.DB_URL32920 || 'https://somedb32920.example.com/getData';
const EXT_SVCURL22319 = process.env.VCAP_URL22319 || 'https://somesvc22319.example.com/getData';
const DB_URL22319 = process.env.DB_URL22319 || 'https://somedb22319.example.com/getData';
const EXT_SVCURL3572 = process.env.VCAP_URL3572 || 'https://somesvc3572.example.com/getData';
const DB_URL3572 = process.env.DB_URL3572 || 'https://somedb3572.example.com/getData';
const EXT_SVCURL25098 = process.env.VCAP_URL25098 || 'https://somesvc25098.example.com/getData';
const DB_URL25098 = process.env.DB_URL25098 || 'https://somedb25098.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #35199</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
