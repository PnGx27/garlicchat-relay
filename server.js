const express = require('express');
const app = express();
const server = require('http').createServer(app);
require('gun')({ web: server });
server.listen(process.env.PORT || 3000, () => console.log('relay online'));
