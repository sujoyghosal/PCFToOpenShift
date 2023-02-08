const PORT = process.env.PORT || 19229;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const EXT_SVCURL4837 = process.env.VCAP_URL4837 || 'https://somesvc4837.example.com/getData';
const DB_URL4837 = process.env.DB_URL4837 || 'https://somedb4837.example.com/getData';
const EXT_SVCURL12895 = process.env.VCAP_URL12895 || 'https://somesvc12895.example.com/getData';
const DB_URL12895 = process.env.DB_URL12895 || 'https://somedb12895.example.com/getData';
const EXT_SVCURL33050 = process.env.VCAP_URL33050 || 'https://somesvc33050.example.com/getData';
const DB_URL33050 = process.env.DB_URL33050 || 'https://somedb33050.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #19229</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
