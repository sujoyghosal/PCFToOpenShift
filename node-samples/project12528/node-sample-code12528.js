const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 12528;
const EXT_SVCURL25136 = process.env.VCAP_URL25136 || 'https://somesv25136.example.com/getData';
const EXT_SVCURL19033 = process.env.VCAP_URL19033 || 'https://somesv19033.example.com/getData';
const EXT_SVCURL28085 = process.env.VCAP_URL28085 || 'https://somesv28085.example.com/getData';
const EXT_SVCURL23010 = process.env.VCAP_URL23010 || 'https://somesv23010.example.com/getData';
const EXT_SVCURL24011 = process.env.VCAP_URL24011 || 'https://somesv24011.example.com/getData';
const EXT_SVCURL12074 = process.env.VCAP_URL12074 || 'https://somesv12074.example.com/getData';
const EXT_SVCURL14583 = process.env.VCAP_URL14583 || 'https://somesv14583.example.com/getData';
const EXT_SVCURL28669 = process.env.VCAP_URL28669 || 'https://somesv28669.example.com/getData';
const EXT_SVCURL15188 = process.env.VCAP_URL15188 || 'https://somesv15188.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #12528</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));
