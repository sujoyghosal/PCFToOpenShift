const PORT = process.env.PORT || 5796;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const EXT_SVCURL17860 = process.env.VCAP_URL17860 || 'https://somesvc17860.example.com/getData';
const DB_URL17860 = process.env.DB_URL17860 || 'https://somedb17860.example.com/getData';
const EXT_SVCURL2089 = process.env.VCAP_URL2089 || 'https://somesvc2089.example.com/getData';
const DB_URL2089 = process.env.DB_URL2089 || 'https://somedb2089.example.com/getData';
const EXT_SVCURL7496 = process.env.VCAP_URL7496 || 'https://somesvc7496.example.com/getData';
const DB_URL7496 = process.env.DB_URL7496 || 'https://somedb7496.example.com/getData';
const EXT_SVCURL31204 = process.env.VCAP_URL31204 || 'https://somesvc31204.example.com/getData';
const DB_URL31204 = process.env.DB_URL31204 || 'https://somedb31204.example.com/getData';
const EXT_SVCURL5453 = process.env.VCAP_URL5453 || 'https://somesvc5453.example.com/getData';
const DB_URL5453 = process.env.DB_URL5453 || 'https://somedb5453.example.com/getData';
const EXT_SVCURL23693 = process.env.VCAP_URL23693 || 'https://somesvc23693.example.com/getData';
const DB_URL23693 = process.env.DB_URL23693 || 'https://somedb23693.example.com/getData';
const EXT_SVCURL11370 = process.env.VCAP_URL11370 || 'https://somesvc11370.example.com/getData';
const DB_URL11370 = process.env.DB_URL11370 || 'https://somedb11370.example.com/getData';
const EXT_SVCURL33844 = process.env.VCAP_URL33844 || 'https://somesvc33844.example.com/getData';
const DB_URL33844 = process.env.DB_URL33844 || 'https://somedb33844.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #5796</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
