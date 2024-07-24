const express = require('express');
const cors = require('cors');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Enable CORS
  server.use(cors());

  server.all('*', (req: any, res: any) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
