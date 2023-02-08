const PORT = process.env.PORT || 21857;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const EXT_SVCURL18507 = process.env.VCAP_URL18507 || 'https://somesvc18507.example.com/getData';
const DB_URL18507 = process.env.DB_URL18507 || 'https://somedb18507.example.com/getData';
const EXT_SVCURL16080 = process.env.VCAP_URL16080 || 'https://somesvc16080.example.com/getData';
const DB_URL16080 = process.env.DB_URL16080 || 'https://somedb16080.example.com/getData';
const EXT_SVCURL15585 = process.env.VCAP_URL15585 || 'https://somesvc15585.example.com/getData';
const DB_URL15585 = process.env.DB_URL15585 || 'https://somedb15585.example.com/getData';
const EXT_SVCURL15017 = process.env.VCAP_URL15017 || 'https://somesvc15017.example.com/getData';
const DB_URL15017 = process.env.DB_URL15017 || 'https://somedb15017.example.com/getData';
const EXT_SVCURL26684 = process.env.VCAP_URL26684 || 'https://somesvc26684.example.com/getData';
const DB_URL26684 = process.env.DB_URL26684 || 'https://somedb26684.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21857</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
