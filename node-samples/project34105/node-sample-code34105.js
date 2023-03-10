const PORT = process.env.PORT || 34105;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL17293 = process.env.VCAP_URL17293 || 'https://somesvc17293.example.com/getData';
const DB_URL17293 = process.env.DB_URL17293 || 'https://somedb17293.example.com/getData';
const EXT_SVCURL18443 = process.env.VCAP_URL18443 || 'https://somesvc18443.example.com/getData';
const DB_URL18443 = process.env.DB_URL18443 || 'https://somedb18443.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #34105</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
