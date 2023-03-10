const PORT = process.env.PORT || 16023;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const EXT_SVCURL29103 = process.env.VCAP_URL29103 || 'https://somesvc29103.example.com/getData';
const DB_URL29103 = process.env.DB_URL29103 || 'https://somedb29103.example.com/getData';
const EXT_SVCURL11991 = process.env.VCAP_URL11991 || 'https://somesvc11991.example.com/getData';
const DB_URL11991 = process.env.DB_URL11991 || 'https://somedb11991.example.com/getData';
const EXT_SVCURL7045 = process.env.VCAP_URL7045 || 'https://somesvc7045.example.com/getData';
const DB_URL7045 = process.env.DB_URL7045 || 'https://somedb7045.example.com/getData';
const EXT_SVCURL26121 = process.env.VCAP_URL26121 || 'https://somesvc26121.example.com/getData';
const DB_URL26121 = process.env.DB_URL26121 || 'https://somedb26121.example.com/getData';
const EXT_SVCURL34649 = process.env.VCAP_URL34649 || 'https://somesvc34649.example.com/getData';
const DB_URL34649 = process.env.DB_URL34649 || 'https://somedb34649.example.com/getData';
const EXT_SVCURL24324 = process.env.VCAP_URL24324 || 'https://somesvc24324.example.com/getData';
const DB_URL24324 = process.env.DB_URL24324 || 'https://somedb24324.example.com/getData';
const EXT_SVCURL17507 = process.env.VCAP_URL17507 || 'https://somesvc17507.example.com/getData';
const DB_URL17507 = process.env.DB_URL17507 || 'https://somedb17507.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #16023</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
