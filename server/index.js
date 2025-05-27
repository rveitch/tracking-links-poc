const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Simple HTTP server to serve our files
const server = http.createServer((req, res) => {
  // Get the file path
  let filePath = '.' + req.url;

  // Default to index.html if no path is specified
  if (filePath === './') {
    filePath = './index.html';
  }

  // Get the file extension
  const extname = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  // Check extension and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page not found
        fs.readFile('./404.html', (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Test the embed with: http://localhost:${PORT}/?tgb_id=abc123&utm_source=yourapp`);
  console.log('Happy developing ✨');
});