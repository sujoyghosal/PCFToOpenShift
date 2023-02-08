const PORT = process.env.PORT || 20278;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const EXT_SVCURL33974 = process.env.VCAP_URL33974 || 'https://somesvc33974.example.com/getData';
const DB_URL33974 = process.env.DB_URL33974 || 'https://somedb33974.example.com/getData';
const EXT_SVCURL18164 = process.env.VCAP_URL18164 || 'https://somesvc18164.example.com/getData';
const DB_URL18164 = process.env.DB_URL18164 || 'https://somedb18164.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20278</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));