const PORT = process.env.PORT || 8119;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const EXT_SVCURL5561 = process.env.VCAP_URL5561 || 'https://somesvc5561.example.com/getData';
const DB_URL5561 = process.env.DB_URL5561 || 'https://somedb5561.example.com/getData';
const EXT_SVCURL5433 = process.env.VCAP_URL5433 || 'https://somesvc5433.example.com/getData';
const DB_URL5433 = process.env.DB_URL5433 || 'https://somedb5433.example.com/getData';
const EXT_SVCURL28816 = process.env.VCAP_URL28816 || 'https://somesvc28816.example.com/getData';
const DB_URL28816 = process.env.DB_URL28816 || 'https://somedb28816.example.com/getData';
const EXT_SVCURL16944 = process.env.VCAP_URL16944 || 'https://somesvc16944.example.com/getData';
const DB_URL16944 = process.env.DB_URL16944 || 'https://somedb16944.example.com/getData';
const EXT_SVCURL31557 = process.env.VCAP_URL31557 || 'https://somesvc31557.example.com/getData';
const DB_URL31557 = process.env.DB_URL31557 || 'https://somedb31557.example.com/getData';
const EXT_SVCURL7640 = process.env.VCAP_URL7640 || 'https://somesvc7640.example.com/getData';
const DB_URL7640 = process.env.DB_URL7640 || 'https://somedb7640.example.com/getData';
const EXT_SVCURL30450 = process.env.VCAP_URL30450 || 'https://somesvc30450.example.com/getData';
const DB_URL30450 = process.env.DB_URL30450 || 'https://somedb30450.example.com/getData';
const EXT_SVCURL27994 = process.env.VCAP_URL27994 || 'https://somesvc27994.example.com/getData';
const DB_URL27994 = process.env.DB_URL27994 || 'https://somedb27994.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #8119</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
