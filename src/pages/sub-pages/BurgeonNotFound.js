import React, { Fragment, Component } from "react";
import { Helmet } from "react-helmet-async";

class BurgeonNotFound extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="id_ID" />
          <meta
            property="og:title"
            content="404 Not Found • PT. Burgeon Adaire International"
          />
          <meta
            property="og:site_name"
            content="PT. Burgeon Adaire International"
          />
          <title>404 Not Found • PT. Burgeon Adaire International</title>
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://images.burgeonadaire.com/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="https://images.burgeonadaire.com/new_bai_img/favicon.svg"
          />
          <link
            rel="shortcut icon"
            href="https://resources.burgeonadaire.com/new_bai_img/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://images.burgeonadaire.com/new_bai_img/apple-touch-icon.png"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="PT. Burgeon Adaire International"
          />
          <link
            rel="manifest"
            href="https://resources.burgeonadaire.com/webmanifest.json"
          />

          <style type="text/css">
            {`
      @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&display=swap");

      body {
        font-family: "Red Hat Text", sans-serif;
        background-color: #121217;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
        color: #ffffff;
        text-align: center;
        margin: 0;
      }

      .err-link {
        color: #ffffff;
        text-decoration: none;
      }

      .font-bold {
        font-weight: bold;
      }
    `}
          </style>
        </Helmet>
      </Fragment>
    );
  }
}

export default BurgeonNotFound;
