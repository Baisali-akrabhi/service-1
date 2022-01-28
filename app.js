const http = require('http');
const port = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node! I\'m from Server-1 \n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});