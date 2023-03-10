const PORT = process.env.PORT || 12880;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const EXT_SVCURL16231 = process.env.VCAP_URL16231 || 'https://somesvc16231.example.com/getData';
const DB_URL16231 = process.env.DB_URL16231 || 'https://somedb16231.example.com/getData';
const EXT_SVCURL32605 = process.env.VCAP_URL32605 || 'https://somesvc32605.example.com/getData';
const DB_URL32605 = process.env.DB_URL32605 || 'https://somedb32605.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12880</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
