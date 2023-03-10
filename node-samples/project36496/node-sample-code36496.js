const PORT = process.env.PORT || 36496;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const EXT_SVCURL33661 = process.env.VCAP_URL33661 || 'https://somesvc33661.example.com/getData';
const DB_URL33661 = process.env.DB_URL33661 || 'https://somedb33661.example.com/getData';
const EXT_SVCURL26152 = process.env.VCAP_URL26152 || 'https://somesvc26152.example.com/getData';
const DB_URL26152 = process.env.DB_URL26152 || 'https://somedb26152.example.com/getData';
const EXT_SVCURL11314 = process.env.VCAP_URL11314 || 'https://somesvc11314.example.com/getData';
const DB_URL11314 = process.env.DB_URL11314 || 'https://somedb11314.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36496</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
