const PORT = process.env.PORT || 14306;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const EXT_SVCURL33881 = process.env.VCAP_URL33881 || 'https://somesvc33881.example.com/getData';
const DB_URL33881 = process.env.DB_URL33881 || 'https://somedb33881.example.com/getData';
const EXT_SVCURL10524 = process.env.VCAP_URL10524 || 'https://somesvc10524.example.com/getData';
const DB_URL10524 = process.env.DB_URL10524 || 'https://somedb10524.example.com/getData';
const EXT_SVCURL13428 = process.env.VCAP_URL13428 || 'https://somesvc13428.example.com/getData';
const DB_URL13428 = process.env.DB_URL13428 || 'https://somedb13428.example.com/getData';
const EXT_SVCURL17976 = process.env.VCAP_URL17976 || 'https://somesvc17976.example.com/getData';
const DB_URL17976 = process.env.DB_URL17976 || 'https://somedb17976.example.com/getData';
const EXT_SVCURL26530 = process.env.VCAP_URL26530 || 'https://somesvc26530.example.com/getData';
const DB_URL26530 = process.env.DB_URL26530 || 'https://somedb26530.example.com/getData';
const EXT_SVCURL4521 = process.env.VCAP_URL4521 || 'https://somesvc4521.example.com/getData';
const DB_URL4521 = process.env.DB_URL4521 || 'https://somedb4521.example.com/getData';
const EXT_SVCURL18163 = process.env.VCAP_URL18163 || 'https://somesvc18163.example.com/getData';
const DB_URL18163 = process.env.DB_URL18163 || 'https://somedb18163.example.com/getData';
const EXT_SVCURL14700 = process.env.VCAP_URL14700 || 'https://somesvc14700.example.com/getData';
const DB_URL14700 = process.env.DB_URL14700 || 'https://somedb14700.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #14306</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
