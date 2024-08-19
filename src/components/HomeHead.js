import React from 'react';
import { Helmet } from 'react-helmet';

function HomeHead() {
  return (
    <Helmet>
      <title>Home • PT. Burgeon Adaire International</title>
      <link rel="canoncial" href="https://burgeonadaire.com" />

      {/* Google */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="follow" />

      {/* Metas */}
      <meta name="description"
        content="PT. Burgeon Adaire International navigates the dynamic world of forex, offering expertise and innovation to meet the market's evolving challenges." />
      <meta name="keywords" content="Forex, Commodity, Services, Technology" />
      <meta name="author" content="PT. Burgeon Adaire International" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="id_ID" />

      <meta property="og:title" content="Home • PT. Burgeon Adaire International" />
      <meta property="og:description"
        content="PT. Burgeon Adaire International navigates the dynamic world of forex, offering expertise and innovation to meet the market's evolving challenges." />
      <meta property="og:type" content="website" />
      <meta property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/burgeon-adaire.appspot.com/o/BAI_MetaCover.webp?alt=media&token=68f49fa4-3fc0-48b5-8ee1-f95031d0bd34" />
      <meta property="og:image:alt" content="PT. Burgeon Adaire International Logo Cover" />
      <meta property="og:url" content="https://burgeonadaire.com" />
      <meta property="og:site_name" content="PT. Burgeon Adaire International" />

      {/* Twitter */}
      <meta name="twitter:title" content="Home • PT. Burgeon Adaire International" />
      <meta name="twitter:description"
        content="PT. Burgeon Adaire International is a dedicated sole proprietorship that focuses on the ever-changing and fast-paced world of forex trading. We strive to provide expert services and innovative solutions to help navigate the complexities of the market." />
      <meta property="twitter:image"
        content="https://firebasestorage.googleapis.com/v0/b/burgeon-adaire.appspot.com/o/BAI_MetaCover.webp?alt=media&token=68f49fa4-3fc0-48b5-8ee1-f95031d0bd34" />
      <meta property="twitter:image:alt" content="PT. Burgeon Adaire International Logo Cover" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* React Slick */}
      <link rel='stylesheet' type='text/css' charSet='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />

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
