import React from 'react';
import BurgeonSSRHomeMain from '../ssr-main/BurgeonSSRHomeMain';

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta property="og:site_name" content="PT. Burgeon Adaire International" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canoncial" href="https://burgeonadaire.com" />
        <link rel='stylesheet' type='text/css' charSet='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ visibility: 'hidden', backgroundColor: '#121217' }}>
        <BurgeonSSRHomeMain />
      </body>
    </html>
  );
}

export default App;