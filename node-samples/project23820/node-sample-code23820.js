const PORT = process.env.PORT || 23820;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const EXT_SVCURL23208 = process.env.VCAP_URL23208 || 'https://somesvc23208.example.com/getData';
const DB_URL23208 = process.env.DB_URL23208 || 'https://somedb23208.example.com/getData';
const EXT_SVCURL15648 = process.env.VCAP_URL15648 || 'https://somesvc15648.example.com/getData';
const DB_URL15648 = process.env.DB_URL15648 || 'https://somedb15648.example.com/getData';
const EXT_SVCURL13089 = process.env.VCAP_URL13089 || 'https://somesvc13089.example.com/getData';
const DB_URL13089 = process.env.DB_URL13089 || 'https://somedb13089.example.com/getData';
const EXT_SVCURL7862 = process.env.VCAP_URL7862 || 'https://somesvc7862.example.com/getData';
const DB_URL7862 = process.env.DB_URL7862 || 'https://somedb7862.example.com/getData';
const EXT_SVCURL6459 = process.env.VCAP_URL6459 || 'https://somesvc6459.example.com/getData';
const DB_URL6459 = process.env.DB_URL6459 || 'https://somedb6459.example.com/getData';
const EXT_SVCURL2321 = process.env.VCAP_URL2321 || 'https://somesvc2321.example.com/getData';
const DB_URL2321 = process.env.DB_URL2321 || 'https://somedb2321.example.com/getData';
const EXT_SVCURL26111 = process.env.VCAP_URL26111 || 'https://somesvc26111.example.com/getData';
const DB_URL26111 = process.env.DB_URL26111 || 'https://somedb26111.example.com/getData';
const EXT_SVCURL28980 = process.env.VCAP_URL28980 || 'https://somesvc28980.example.com/getData';
const DB_URL28980 = process.env.DB_URL28980 || 'https://somedb28980.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #23820</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));