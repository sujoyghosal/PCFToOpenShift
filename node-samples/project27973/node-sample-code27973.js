const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 27973;
const EXT_SVCURL11725 = process.env.VCAP_URL11725 || 'https://somesv11725.example.com/getData';
const EXT_SVCURL29368 = process.env.VCAP_URL29368 || 'https://somesv29368.example.com/getData';
const EXT_SVCURL25887 = process.env.VCAP_URL25887 || 'https://somesv25887.example.com/getData';
const EXT_SVCURL12362 = process.env.VCAP_URL12362 || 'https://somesv12362.example.com/getData';
const EXT_SVCURL26863 = process.env.VCAP_URL26863 || 'https://somesv26863.example.com/getData';
const EXT_SVCURL2955 = process.env.VCAP_URL2955 || 'https://somesv2955.example.com/getData';
const EXT_SVCURL17646 = process.env.VCAP_URL17646 || 'https://somesv17646.example.com/getData';
const EXT_SVCURL19586 = process.env.VCAP_URL19586 || 'https://somesv19586.example.com/getData';
const EXT_SVCURL24400 = process.env.VCAP_URL24400 || 'https://somesv24400.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #27973</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
