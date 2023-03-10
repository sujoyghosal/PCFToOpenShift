const PORT = process.env.PORT || 14006;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const EXT_SVCURL16194 = process.env.VCAP_URL16194 || 'https://somesvc16194.example.com/getData';
const DB_URL16194 = process.env.DB_URL16194 || 'https://somedb16194.example.com/getData';
const EXT_SVCURL26256 = process.env.VCAP_URL26256 || 'https://somesvc26256.example.com/getData';
const DB_URL26256 = process.env.DB_URL26256 || 'https://somedb26256.example.com/getData';
const EXT_SVCURL27615 = process.env.VCAP_URL27615 || 'https://somesvc27615.example.com/getData';
const DB_URL27615 = process.env.DB_URL27615 || 'https://somedb27615.example.com/getData';
const EXT_SVCURL27068 = process.env.VCAP_URL27068 || 'https://somesvc27068.example.com/getData';
const DB_URL27068 = process.env.DB_URL27068 || 'https://somedb27068.example.com/getData';
const EXT_SVCURL16818 = process.env.VCAP_URL16818 || 'https://somesvc16818.example.com/getData';
const DB_URL16818 = process.env.DB_URL16818 || 'https://somedb16818.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14006</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
