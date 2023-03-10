const PORT = process.env.PORT || 31981;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const EXT_SVCURL6801 = process.env.VCAP_URL6801 || 'https://somesvc6801.example.com/getData';
const DB_URL6801 = process.env.DB_URL6801 || 'https://somedb6801.example.com/getData';
const EXT_SVCURL28618 = process.env.VCAP_URL28618 || 'https://somesvc28618.example.com/getData';
const DB_URL28618 = process.env.DB_URL28618 || 'https://somedb28618.example.com/getData';
const EXT_SVCURL22709 = process.env.VCAP_URL22709 || 'https://somesvc22709.example.com/getData';
const DB_URL22709 = process.env.DB_URL22709 || 'https://somedb22709.example.com/getData';
const EXT_SVCURL26146 = process.env.VCAP_URL26146 || 'https://somesvc26146.example.com/getData';
const DB_URL26146 = process.env.DB_URL26146 || 'https://somedb26146.example.com/getData';
const EXT_SVCURL29592 = process.env.VCAP_URL29592 || 'https://somesvc29592.example.com/getData';
const DB_URL29592 = process.env.DB_URL29592 || 'https://somedb29592.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #31981</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
