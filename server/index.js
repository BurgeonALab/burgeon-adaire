const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ServerIndex = require('../src/ServerIndex').default;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static(path.resolve(__dirname, '../ssr')));

app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<ServerIndex />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});