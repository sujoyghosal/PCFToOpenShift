const PORT = process.env.PORT || 20084;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const EXT_SVCURL30568 = process.env.VCAP_URL30568 || 'https://somesvc30568.example.com/getData';
const DB_URL30568 = process.env.DB_URL30568 || 'https://somedb30568.example.com/getData';
const EXT_SVCURL25317 = process.env.VCAP_URL25317 || 'https://somesvc25317.example.com/getData';
const DB_URL25317 = process.env.DB_URL25317 || 'https://somedb25317.example.com/getData';
const EXT_SVCURL19163 = process.env.VCAP_URL19163 || 'https://somesvc19163.example.com/getData';
const DB_URL19163 = process.env.DB_URL19163 || 'https://somedb19163.example.com/getData';
const EXT_SVCURL5784 = process.env.VCAP_URL5784 || 'https://somesvc5784.example.com/getData';
const DB_URL5784 = process.env.DB_URL5784 || 'https://somedb5784.example.com/getData';
const EXT_SVCURL10792 = process.env.VCAP_URL10792 || 'https://somesvc10792.example.com/getData';
const DB_URL10792 = process.env.DB_URL10792 || 'https://somedb10792.example.com/getData';
const EXT_SVCURL30404 = process.env.VCAP_URL30404 || 'https://somesvc30404.example.com/getData';
const DB_URL30404 = process.env.DB_URL30404 || 'https://somedb30404.example.com/getData';
const EXT_SVCURL31637 = process.env.VCAP_URL31637 || 'https://somesvc31637.example.com/getData';
const DB_URL31637 = process.env.DB_URL31637 || 'https://somedb31637.example.com/getData';
const EXT_SVCURL5163 = process.env.VCAP_URL5163 || 'https://somesvc5163.example.com/getData';
const DB_URL5163 = process.env.DB_URL5163 || 'https://somedb5163.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #20084</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
