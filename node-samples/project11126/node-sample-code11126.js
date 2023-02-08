const PORT = process.env.PORT || 11126;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL29988 = process.env.VCAP_URL29988 || 'https://somesvc29988.example.com/getData';
const DB_URL29988 = process.env.DB_URL29988 || 'https://somedb29988.example.com/getData';
const EXT_SVCURL8735 = process.env.VCAP_URL8735 || 'https://somesvc8735.example.com/getData';
const DB_URL8735 = process.env.DB_URL8735 || 'https://somedb8735.example.com/getData';
const EXT_SVCURL2301 = process.env.VCAP_URL2301 || 'https://somesvc2301.example.com/getData';
const DB_URL2301 = process.env.DB_URL2301 || 'https://somedb2301.example.com/getData';
const EXT_SVCURL32227 = process.env.VCAP_URL32227 || 'https://somesvc32227.example.com/getData';
const DB_URL32227 = process.env.DB_URL32227 || 'https://somedb32227.example.com/getData';
const EXT_SVCURL30632 = process.env.VCAP_URL30632 || 'https://somesvc30632.example.com/getData';
const DB_URL30632 = process.env.DB_URL30632 || 'https://somedb30632.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #11126</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));