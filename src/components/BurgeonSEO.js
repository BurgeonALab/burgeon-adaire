import React from 'react';
import { Helmet } from 'react-helmet-async';

export const BurgeonSEO = ({ title, description, sitename, canoncial }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={sitename} />
      <link rel="canoncial" href={canoncial} />
    </Helmet>
  );
};