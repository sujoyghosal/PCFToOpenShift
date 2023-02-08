const PORT = process.env.PORT || 14845;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const EXT_SVCURL29397 = process.env.VCAP_URL29397 || 'https://somesvc29397.example.com/getData';
const DB_URL29397 = process.env.DB_URL29397 || 'https://somedb29397.example.com/getData';
const EXT_SVCURL16692 = process.env.VCAP_URL16692 || 'https://somesvc16692.example.com/getData';
const DB_URL16692 = process.env.DB_URL16692 || 'https://somedb16692.example.com/getData';
const EXT_SVCURL3507 = process.env.VCAP_URL3507 || 'https://somesvc3507.example.com/getData';
const DB_URL3507 = process.env.DB_URL3507 || 'https://somedb3507.example.com/getData';
const EXT_SVCURL28881 = process.env.VCAP_URL28881 || 'https://somesvc28881.example.com/getData';
const DB_URL28881 = process.env.DB_URL28881 || 'https://somedb28881.example.com/getData';
const EXT_SVCURL27224 = process.env.VCAP_URL27224 || 'https://somesvc27224.example.com/getData';
const DB_URL27224 = process.env.DB_URL27224 || 'https://somedb27224.example.com/getData';
const EXT_SVCURL23784 = process.env.VCAP_URL23784 || 'https://somesvc23784.example.com/getData';
const DB_URL23784 = process.env.DB_URL23784 || 'https://somedb23784.example.com/getData';
const EXT_SVCURL9127 = process.env.VCAP_URL9127 || 'https://somesvc9127.example.com/getData';
const DB_URL9127 = process.env.DB_URL9127 || 'https://somedb9127.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14845</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
