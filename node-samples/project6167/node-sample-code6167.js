const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 6167;
const EXT_SVCURL28904 = process.env.VCAP_URL28904 || 'https://somesv28904.example.com/getData';
const EXT_SVCURL8962 = process.env.VCAP_URL8962 || 'https://somesv8962.example.com/getData';
const EXT_SVCURL11370 = process.env.VCAP_URL11370 || 'https://somesv11370.example.com/getData';
const EXT_SVCURL18180 = process.env.VCAP_URL18180 || 'https://somesv18180.example.com/getData';
const EXT_SVCURL2148 = process.env.VCAP_URL2148 || 'https://somesv2148.example.com/getData';
const EXT_SVCURL6815 = process.env.VCAP_URL6815 || 'https://somesv6815.example.com/getData';
const EXT_SVCURL25631 = process.env.VCAP_URL25631 || 'https://somesv25631.example.com/getData';
const EXT_SVCURL21039 = process.env.VCAP_URL21039 || 'https://somesv21039.example.com/getData';
const EXT_SVCURL9795 = process.env.VCAP_URL9795 || 'https://somesv9795.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #6167</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
