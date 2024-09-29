import React, { Component, Suspense } from 'react';

export default class BurgeonSSRPolicy extends Component {
  render() {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/bundle.css" />
            <link rel="icon" href="/favicon.ico" />
            <title>Privacy Policy | PT. Burgeon Adaire International</title>
          </head>
          <body>
            <h1 className='text-light'>Privacy and Policy</h1>
          </body>
        </html>
      </Suspense>
    );
  }
}