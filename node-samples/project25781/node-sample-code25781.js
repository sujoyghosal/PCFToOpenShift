const PORT = process.env.PORT || 25781;
const http = require("http");
const express = require("express");
const EXT_SVCURL27898 = process.env.VCAP_URL27898 || 'https://somesvc27898.example.com/getData';
const DB_URL27898 = process.env.DB_URL27898 || 'https://somedb27898.example.com/getData';
const EXT_SVCURL21852 = process.env.VCAP_URL21852 || 'https://somesvc21852.example.com/getData';
const DB_URL21852 = process.env.DB_URL21852 || 'https://somedb21852.example.com/getData';
const EXT_SVCURL28896 = process.env.VCAP_URL28896 || 'https://somesvc28896.example.com/getData';
const DB_URL28896 = process.env.DB_URL28896 || 'https://somedb28896.example.com/getData';
const EXT_SVCURL31321 = process.env.VCAP_URL31321 || 'https://somesvc31321.example.com/getData';
const DB_URL31321 = process.env.DB_URL31321 || 'https://somedb31321.example.com/getData';
const EXT_SVCURL28653 = process.env.VCAP_URL28653 || 'https://somesvc28653.example.com/getData';
const DB_URL28653 = process.env.DB_URL28653 || 'https://somedb28653.example.com/getData';
const EXT_SVCURL19885 = process.env.VCAP_URL19885 || 'https://somesvc19885.example.com/getData';
const DB_URL19885 = process.env.DB_URL19885 || 'https://somedb19885.example.com/getData';
const EXT_SVCURL20481 = process.env.VCAP_URL20481 || 'https://somesvc20481.example.com/getData';
const DB_URL20481 = process.env.DB_URL20481 || 'https://somedb20481.example.com/getData';
const EXT_SVCURL27738 = process.env.VCAP_URL27738 || 'https://somesvc27738.example.com/getData';
const DB_URL27738 = process.env.DB_URL27738 || 'https://somedb27738.example.com/getData';
const EXT_SVCURL23774 = process.env.VCAP_URL23774 || 'https://somesvc23774.example.com/getData';
const DB_URL23774 = process.env.DB_URL23774 || 'https://somedb23774.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #25781</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));