const PORT = process.env.PORT || 21223;
const http = require("http");
const express = require("express");
const EXT_SVCURL3655 = process.env.VCAP_URL3655 || 'https://somesvc3655.example.com/getData';
const DB_URL3655 = process.env.DB_URL3655 || 'https://somedb3655.example.com/getData';
const EXT_SVCURL14274 = process.env.VCAP_URL14274 || 'https://somesvc14274.example.com/getData';
const DB_URL14274 = process.env.DB_URL14274 || 'https://somedb14274.example.com/getData';
const EXT_SVCURL7019 = process.env.VCAP_URL7019 || 'https://somesvc7019.example.com/getData';
const DB_URL7019 = process.env.DB_URL7019 || 'https://somedb7019.example.com/getData';
const EXT_SVCURL33752 = process.env.VCAP_URL33752 || 'https://somesvc33752.example.com/getData';
const DB_URL33752 = process.env.DB_URL33752 || 'https://somedb33752.example.com/getData';
const EXT_SVCURL11825 = process.env.VCAP_URL11825 || 'https://somesvc11825.example.com/getData';
const DB_URL11825 = process.env.DB_URL11825 || 'https://somedb11825.example.com/getData';
const EXT_SVCURL17263 = process.env.VCAP_URL17263 || 'https://somesvc17263.example.com/getData';
const DB_URL17263 = process.env.DB_URL17263 || 'https://somedb17263.example.com/getData';
const EXT_SVCURL8240 = process.env.VCAP_URL8240 || 'https://somesvc8240.example.com/getData';
const DB_URL8240 = process.env.DB_URL8240 || 'https://somedb8240.example.com/getData';
const EXT_SVCURL12750 = process.env.VCAP_URL12750 || 'https://somesvc12750.example.com/getData';
const DB_URL12750 = process.env.DB_URL12750 || 'https://somedb12750.example.com/getData';
const EXT_SVCURL34739 = process.env.VCAP_URL34739 || 'https://somesvc34739.example.com/getData';
const DB_URL34739 = process.env.DB_URL34739 || 'https://somedb34739.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #21223</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
