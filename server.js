const express = require('express');
const http = require('http');
const Gun = require('gun');

const app = express();
const server = http.createServer(app);

app.use(Gun.serve);
Gun({ web: server });

app.get('/', (req, res) => res.send('GarlicChat relay online ✓'));

server.listen(process.env.PORT || 3000, () => {
  console.log('GarlicChat relay online');
});
