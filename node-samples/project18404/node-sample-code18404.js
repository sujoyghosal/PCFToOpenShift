const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18404;
const EXT_SVCURL15867 = process.env.VCAP_URL15867 || 'https://somesv15867.example.com/getData';
const EXT_SVCURL33021 = process.env.VCAP_URL33021 || 'https://somesv33021.example.com/getData';
const EXT_SVCURL11609 = process.env.VCAP_URL11609 || 'https://somesv11609.example.com/getData';
const EXT_SVCURL18322 = process.env.VCAP_URL18322 || 'https://somesv18322.example.com/getData';
const EXT_SVCURL20865 = process.env.VCAP_URL20865 || 'https://somesv20865.example.com/getData';
const EXT_SVCURL32354 = process.env.VCAP_URL32354 || 'https://somesv32354.example.com/getData';
const EXT_SVCURL30427 = process.env.VCAP_URL30427 || 'https://somesv30427.example.com/getData';
const EXT_SVCURL25237 = process.env.VCAP_URL25237 || 'https://somesv25237.example.com/getData';
const EXT_SVCURL14457 = process.env.VCAP_URL14457 || 'https://somesv14457.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18404</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));