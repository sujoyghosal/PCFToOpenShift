const PORT = process.env.PORT || 10611;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const EXT_SVCURL3070 = process.env.VCAP_URL3070 || 'https://somesvc3070.example.com/getData';
const DB_URL3070 = process.env.DB_URL3070 || 'https://somedb3070.example.com/getData';
const EXT_SVCURL26282 = process.env.VCAP_URL26282 || 'https://somesvc26282.example.com/getData';
const DB_URL26282 = process.env.DB_URL26282 || 'https://somedb26282.example.com/getData';
const EXT_SVCURL28408 = process.env.VCAP_URL28408 || 'https://somesvc28408.example.com/getData';
const DB_URL28408 = process.env.DB_URL28408 || 'https://somedb28408.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #10611</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
