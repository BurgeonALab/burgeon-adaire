import React from "react";
import { Helmet } from "react-helmet-async";

export const BurgeonSEO = ({ title, description, canonical }) => {
  return (
    <Helmet>
      {/* Google */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="follow" />
      {/* Metas */}
      <meta
        name="keywords"
        content="Forex, Commodity, Service, Technology, Cryptocurrency, Stock, Paper, Finance"
      />
      <meta name="author" content="PT. Burgeon Adaire International" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="id_ID" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/burgeon-adaire.appspot.com/o/BAI_MetaCover.webp?alt=media&token=68f49fa4-3fc0-48b5-8ee1-f95031d0bd34"
      />
      <meta
        property="og:image:alt"
        content="PT. Burgeon Adaire International Logo Cover"
      />
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://firebasestorage.googleapis.com/v0/b/burgeon-adaire.appspot.com/o/BAI_MetaCover.webp?alt=media&token=68f49fa4-3fc0-48b5-8ee1-f95031d0bd34"
      />
      <meta
        property="twitter:image:alt"
        content="PT. Burgeon Adaire International Logo Cover"
      />
      <meta name="twitter:card" content="summary_large_image" />
      {/* React Slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://images.burgeonadaire.com/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://images.burgeonadaire.com/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://images.burgeonadaire.com/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="https://resources.burgeonadaire.com/webmanifest.json"
      />
      <link
        rel="mask-icon"
        href="https://images.burgeonadaire.com/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta
        name="msapplication-TileImage"
        content="https://images.burgeonadaire.com/mstile-150x150.png"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content="https://resources.burgeonadaire.com/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
      {/* Informations */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        property="og:site_name"
        content="PT. Burgeon Adaire International"
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
};
