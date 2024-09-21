import React from 'react';
import { Helmet } from 'react-helmet-async';

export const BurgeonSEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content="PT. Burgeon Adaire International" />
      <link rel="canoncial" href="https://burgeonadaire.com" />
    </Helmet>
  );
};