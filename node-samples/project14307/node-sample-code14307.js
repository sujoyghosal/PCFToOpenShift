const PORT = process.env.PORT || 14307;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL33679 = process.env.VCAP_URL33679 || 'https://somesvc33679.example.com/getData';
const DB_URL33679 = process.env.DB_URL33679 || 'https://somedb33679.example.com/getData';
const EXT_SVCURL33852 = process.env.VCAP_URL33852 || 'https://somesvc33852.example.com/getData';
const DB_URL33852 = process.env.DB_URL33852 || 'https://somedb33852.example.com/getData';
const EXT_SVCURL3165 = process.env.VCAP_URL3165 || 'https://somesvc3165.example.com/getData';
const DB_URL3165 = process.env.DB_URL3165 || 'https://somedb3165.example.com/getData';
const EXT_SVCURL5453 = process.env.VCAP_URL5453 || 'https://somesvc5453.example.com/getData';
const DB_URL5453 = process.env.DB_URL5453 || 'https://somedb5453.example.com/getData';
const EXT_SVCURL2804 = process.env.VCAP_URL2804 || 'https://somesvc2804.example.com/getData';
const DB_URL2804 = process.env.DB_URL2804 || 'https://somedb2804.example.com/getData';
const EXT_SVCURL28063 = process.env.VCAP_URL28063 || 'https://somesvc28063.example.com/getData';
const DB_URL28063 = process.env.DB_URL28063 || 'https://somedb28063.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14307</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
