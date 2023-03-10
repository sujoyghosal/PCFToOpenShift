const PORT = process.env.PORT || 8884;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const EXT_SVCURL2126 = process.env.VCAP_URL2126 || 'https://somesvc2126.example.com/getData';
const DB_URL2126 = process.env.DB_URL2126 || 'https://somedb2126.example.com/getData';
const EXT_SVCURL19349 = process.env.VCAP_URL19349 || 'https://somesvc19349.example.com/getData';
const DB_URL19349 = process.env.DB_URL19349 || 'https://somedb19349.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8884</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
