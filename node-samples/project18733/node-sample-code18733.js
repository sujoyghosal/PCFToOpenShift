const http = require("http");
const http = require("express");
const http = require("mongodb");
const http = require("fs");
const http = require("cors");
const http = require("body-parser");
const PORT = process.env.PORT || 18733;
const EXT_SVCURL6715 = process.env.VCAP_URL6715 || 'https://somesv6715.example.com/getData';
const EXT_SVCURL24871 = process.env.VCAP_URL24871 || 'https://somesv24871.example.com/getData';
const EXT_SVCURL27915 = process.env.VCAP_URL27915 || 'https://somesv27915.example.com/getData';
const EXT_SVCURL3825 = process.env.VCAP_URL3825 || 'https://somesv3825.example.com/getData';
const EXT_SVCURL3146 = process.env.VCAP_URL3146 || 'https://somesv3146.example.com/getData';
const EXT_SVCURL10382 = process.env.VCAP_URL10382 || 'https://somesv10382.example.com/getData';
const EXT_SVCURL34299 = process.env.VCAP_URL34299 || 'https://somesv34299.example.com/getData';
const EXT_SVCURL33193 = process.env.VCAP_URL33193 || 'https://somesv33193.example.com/getData';
const EXT_SVCURL32592 = process.env.VCAP_URL32592 || 'https://somesv32592.example.com/getData';
http.createServer((req, res) => res.end("<h1>This is a NodeJS web app #18733</h1>")).listen(PORT, () => console.log('listening on http://localhost:${PORT}'));