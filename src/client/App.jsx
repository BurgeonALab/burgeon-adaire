import React from 'react';
import { Route, Routes } from "react-router-dom";
import {
  BurgeonSSRCookie,
  BurgeonSSRPolicy,
  BurgeonSSRTAC,
  BurgeonSSRHome,
} from '../ssr-pages';

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PT. Burgeon Adaire International</title>
      </head>
      <body>
        <Routes>
          <Route path="/" element={<BurgeonSSRHome />} />
          <Route path="/privacy-policy" element={<BurgeonSSRPolicy />} />
          <Route path="/cookie-policy" element={<BurgeonSSRCookie />} />
          <Route path="/terms-and-condition" element={<BurgeonSSRTAC />} />
        </Routes>
      </body>
    </html>
  );
}


export default App;