import React, {
  Suspense,
  Component,
} from 'react';

export default class BurgeonSSRHome extends Component {
  render() {
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/bundle.css" />
            <link rel="icon" href="/favicon.ico" />
            <title>Driving the Future | PT. Burgeon Adaire International</title>
          </head>
          <body>
            <div className='bottom-footer-container'>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className='text-light'>PT. Burgeon Adaire International</h1>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      </Suspense>
    );
  }
}