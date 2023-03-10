const PORT = process.env.PORT || 34106;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const EXT_SVCURL26943 = process.env.VCAP_URL26943 || 'https://somesvc26943.example.com/getData';
const DB_URL26943 = process.env.DB_URL26943 || 'https://somedb26943.example.com/getData';
const EXT_SVCURL12150 = process.env.VCAP_URL12150 || 'https://somesvc12150.example.com/getData';
const DB_URL12150 = process.env.DB_URL12150 || 'https://somedb12150.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34106</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
