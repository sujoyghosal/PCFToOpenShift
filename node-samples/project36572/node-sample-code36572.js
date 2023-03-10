const PORT = process.env.PORT || 36572;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const EXT_SVCURL18247 = process.env.VCAP_URL18247 || 'https://somesvc18247.example.com/getData';
const DB_URL18247 = process.env.DB_URL18247 || 'https://somedb18247.example.com/getData';
const EXT_SVCURL19147 = process.env.VCAP_URL19147 || 'https://somesvc19147.example.com/getData';
const DB_URL19147 = process.env.DB_URL19147 || 'https://somedb19147.example.com/getData';
const EXT_SVCURL29681 = process.env.VCAP_URL29681 || 'https://somesvc29681.example.com/getData';
const DB_URL29681 = process.env.DB_URL29681 || 'https://somedb29681.example.com/getData';
const EXT_SVCURL7650 = process.env.VCAP_URL7650 || 'https://somesvc7650.example.com/getData';
const DB_URL7650 = process.env.DB_URL7650 || 'https://somedb7650.example.com/getData';
const EXT_SVCURL6688 = process.env.VCAP_URL6688 || 'https://somesvc6688.example.com/getData';
const DB_URL6688 = process.env.DB_URL6688 || 'https://somedb6688.example.com/getData';
const EXT_SVCURL8868 = process.env.VCAP_URL8868 || 'https://somesvc8868.example.com/getData';
const DB_URL8868 = process.env.DB_URL8868 || 'https://somedb8868.example.com/getData';
const EXT_SVCURL18431 = process.env.VCAP_URL18431 || 'https://somesvc18431.example.com/getData';
const DB_URL18431 = process.env.DB_URL18431 || 'https://somedb18431.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #36572</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
