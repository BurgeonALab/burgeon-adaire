import React from 'react';
import {Helmet} from 'react-helmet';

function WebHead() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="./assets/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./assets/favicons/favicon-16x16.png" />
      <link rel="manifest" href="./assets/favicons/site.webmanifest" />
      <link rel="mask-icon" href="./assets/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}

export default WebHead;
