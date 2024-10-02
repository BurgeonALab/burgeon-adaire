import React from 'react';
import { Helmet } from 'react-helmet-async';

export const BurgeonSEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {/* Metas */}
      <meta name="description" content={description} />
      <meta property="og:site_name" content="PT. Burgeon Adaire International" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="canoncial" href="https://burgeonadaire.com" />
      {/* React Slick */}
      <link rel='stylesheet' type='text/css' charSet='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
      <link rel="icon" href="/favicon.ico" />
      {/* JSON-LD */}
      <script type='application/ld+json'>
        {
          `
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Burgeon Adaire International",
              "legalName": "PT. Burgeon Adaire International",
              "url": "https://burgeonadaire.com",
              "foundingDate": "2018",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Gerald Zandisko"
                },
                {
                  "@type": "Person",
                  "name": "Nadine Huang"
                }
              ],
              "sponsor":
                {
                  "@type": "Organization",
                  "name": "Pepperstone",
                  "url": "https://pepperstone.com"
                }
            }
          `
        }
      </script>
    </Helmet>
  );
};