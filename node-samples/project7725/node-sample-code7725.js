const PORT = process.env.PORT || 7725;
const http = require("http");
const express = require("express");
const mongodb = require("mongodb");
const fs = require("fs");
const cors = require("cors");
const body-parser = require("body-parser");
const EXT_SVCURL5103 = process.env.VCAP_URL5103 || 'https://somesvc5103.example.com/getData';
const DB_URL5103 = process.env.DB_URL5103 || 'https://somedb5103.example.com/getData';
const EXT_SVCURL30152 = process.env.VCAP_URL30152 || 'https://somesvc30152.example.com/getData';
const DB_URL30152 = process.env.DB_URL30152 || 'https://somedb30152.example.com/getData';
const EXT_SVCURL29070 = process.env.VCAP_URL29070 || 'https://somesvc29070.example.com/getData';
const DB_URL29070 = process.env.DB_URL29070 || 'https://somedb29070.example.com/getData';
const EXT_SVCURL11018 = process.env.VCAP_URL11018 || 'https://somesvc11018.example.com/getData';
const DB_URL11018 = process.env.DB_URL11018 || 'https://somedb11018.example.com/getData';
const EXT_SVCURL5711 = process.env.VCAP_URL5711 || 'https://somesvc5711.example.com/getData';
const DB_URL5711 = process.env.DB_URL5711 || 'https://somedb5711.example.com/getData';
const EXT_SVCURL19944 = process.env.VCAP_URL19944 || 'https://somesvc19944.example.com/getData';
const DB_URL19944 = process.env.DB_URL19944 || 'https://somedb19944.example.com/getData';
const EXT_SVCURL32956 = process.env.VCAP_URL32956 || 'https://somesvc32956.example.com/getData';
const DB_URL32956 = process.env.DB_URL32956 || 'https://somedb32956.example.com/getData';
const EXT_SVCURL22209 = process.env.VCAP_URL22209 || 'https://somesvc22209.example.com/getData';
const DB_URL22209 = process.env.DB_URL22209 || 'https://somedb22209.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #7725</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
