const PORT = process.env.PORT || 34286;
const http = require("http");
const express = require("express");
const EXT_SVCURL26589 = process.env.VCAP_URL26589 || 'https://somesvc26589.example.com/getData';
const DB_URL26589 = process.env.DB_URL26589 || 'https://somedb26589.example.com/getData';
const EXT_SVCURL18075 = process.env.VCAP_URL18075 || 'https://somesvc18075.example.com/getData';
const DB_URL18075 = process.env.DB_URL18075 || 'https://somedb18075.example.com/getData';
const EXT_SVCURL26008 = process.env.VCAP_URL26008 || 'https://somesvc26008.example.com/getData';
const DB_URL26008 = process.env.DB_URL26008 || 'https://somedb26008.example.com/getData';
const EXT_SVCURL28597 = process.env.VCAP_URL28597 || 'https://somesvc28597.example.com/getData';
const DB_URL28597 = process.env.DB_URL28597 || 'https://somedb28597.example.com/getData';
const EXT_SVCURL10016 = process.env.VCAP_URL10016 || 'https://somesvc10016.example.com/getData';
const DB_URL10016 = process.env.DB_URL10016 || 'https://somedb10016.example.com/getData';
const EXT_SVCURL10813 = process.env.VCAP_URL10813 || 'https://somesvc10813.example.com/getData';
const DB_URL10813 = process.env.DB_URL10813 || 'https://somedb10813.example.com/getData';
const EXT_SVCURL18404 = process.env.VCAP_URL18404 || 'https://somesvc18404.example.com/getData';
const DB_URL18404 = process.env.DB_URL18404 || 'https://somedb18404.example.com/getData';
const EXT_SVCURL23676 = process.env.VCAP_URL23676 || 'https://somesvc23676.example.com/getData';
const DB_URL23676 = process.env.DB_URL23676 || 'https://somedb23676.example.com/getData';
const EXT_SVCURL5277 = process.env.VCAP_URL5277 || 'https://somesvc5277.example.com/getData';
const DB_URL5277 = process.env.DB_URL5277 || 'https://somedb5277.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34286</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
