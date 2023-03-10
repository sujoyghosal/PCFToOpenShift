const PORT = process.env.PORT || 13979;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const socket.io = require("socket.io");
const EXT_SVCURL11434 = process.env.VCAP_URL11434 || 'https://somesvc11434.example.com/getData';
const DB_URL11434 = process.env.DB_URL11434 || 'https://somedb11434.example.com/getData';
const EXT_SVCURL14634 = process.env.VCAP_URL14634 || 'https://somesvc14634.example.com/getData';
const DB_URL14634 = process.env.DB_URL14634 || 'https://somedb14634.example.com/getData';
const EXT_SVCURL28505 = process.env.VCAP_URL28505 || 'https://somesvc28505.example.com/getData';
const DB_URL28505 = process.env.DB_URL28505 || 'https://somedb28505.example.com/getData';
const EXT_SVCURL14160 = process.env.VCAP_URL14160 || 'https://somesvc14160.example.com/getData';
const DB_URL14160 = process.env.DB_URL14160 || 'https://somedb14160.example.com/getData';
const EXT_SVCURL4012 = process.env.VCAP_URL4012 || 'https://somesvc4012.example.com/getData';
const DB_URL4012 = process.env.DB_URL4012 || 'https://somedb4012.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #13979</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
