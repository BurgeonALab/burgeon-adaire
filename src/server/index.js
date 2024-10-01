const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('../client/App').default;
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('ssr-public'));

app.get('*', (req, res) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(
    `
      <!DOCTYPE html>
      <html style="display: none" lang="en">
        <body>
          <div id="root">${html}</div>
          <script src="/webpacks.js"></script>
        </body>
      </html>
    `
  )
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});