import React from 'react';
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {
  BurgeonSSRHome,
  BurgeonSSRPolicy,
  BurgeonSSRCookie,
  BurgeonSSRTAC,
} from "../ssr-pages";

const helmetContext = {};

const App = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <Routes>
        <Route path="/" element={<BurgeonSSRHome />} />
        <Route path="/privacy-policy" element={<BurgeonSSRPolicy />} />
        <Route path="/cookie-policy" element={<BurgeonSSRCookie />} />
        <Route path="/terms-and-conditions" element={<BurgeonSSRTAC />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;