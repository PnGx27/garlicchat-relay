const express = require('express');
const http = require('http');
const Gun = require('gun');

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

app.use(Gun.serve);
app.get('/', (req, res) => res.send('GarlicChat relay online ✓'));

Gun({ web: server });

server.listen(PORT, '0.0.0.0', () => {
  console.log('GarlicChat relay online on port ' + PORT);
});
