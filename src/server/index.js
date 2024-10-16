const express = require('express');
const React = require('react');
const { renderToPipeableStream } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('../client/App').default;
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('ssr-public'));

app.get('*', (req, res) => {
  const { pipe } = renderToPipeableStream(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>, {
    bootstrapScripts: ['/webpacks.js'],
    onShellReady() {
      res.setHeader('content-type', 'text/html');
      pipe(res);
    }
  }
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});