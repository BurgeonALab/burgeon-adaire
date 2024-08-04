import React from 'react';
import { Helmet } from 'react-helmet';

function HomeHead() {
  return (
    <Helmet>
      <title>Home • PT. Burgeon Adaire International</title>

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="follow" />
      <link rel="canoncial" href="https://www.burgeonadaire.com" />
      <meta name="description"
        content="PT. Burgeon Adaire International is a dedicated sole proprietorship specializing in the dynamic and face-paced world of forex trading. We offer valuable insights and learning opportunities for those interested in trading, while also fostering strong partnerships." />
      <meta name="keywords" content="Forex" />
      <meta name="author" content="PT. Burgeon Adaire International" />
      <meta property="og:locale" content="en_US" />

      <meta property="og:title" content="Home • PT. Burgeon Adaire International" />
      <meta property="og:description"
        content="PT. Burgeon Adaire International is a dedicated sole proprietorship specializing in the dynamic and face-paced world of forex trading. We offer valuable insights and learning opportunities for those interested in trading, while also fostering strong partnerships." />
      <meta property="og:type" content="website" />
      <meta property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/burgeon-adaire.appspot.com/o/BAI_MetaCover.webp?alt=media&token=68f49fa4-3fc0-48b5-8ee1-f95031d0bd34" />
      <meta property="og:image:alt" content="PT. Burgeon Adaire International Logo Cover" />
      <meta property="og:url" content="https://www.burgeonadaire.com" />
      <meta property="og:site_name" content="PT. Burgeon Adaire International" />

      <meta name="twitter:title" content="Home • PT. Burgeon Adaire International" />
      <meta name="twitter:description"
        content="PT. Burgeon Adaire International is a dedicated sole proprietorship specializing in the dynamic and face-paced world of forex trading. We offer valuable insights and learning opportunities for those interested in trading, while also fostering strong partnerships." />
      <meta property="twitter:image"
        content="https://firebasestorage.googleapis.com/v0/b/burgeon-adaire.appspot.com/o/BAI_MetaCover.webp?alt=media&token=68f49fa4-3fc0-48b5-8ee1-f95031d0bd34" />
      <meta property="twitter:image:alt" content="PT. Burgeon Adaire International Logo Cover" />
      <meta name="twitter:card" content="summary_large_image" />

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

export default HomeHead;
