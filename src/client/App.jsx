import React, { lazy } from 'react';
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import('../ssr-pages/BurgeonSSRHome'));
const PrivacyPolicy = lazy(() => import('../ssr-pages/BurgeonSSRPolicy'));
const CookiePolicy = lazy(() => import('../ssr-pages/BurgeonSSRPolicy'));
const TermsConditions = lazy(() => import('../ssr-pages/BurgeonSSRTAC'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/terms-and-conditions" element={<TermsConditions />} />
    </Routes>
  );
}

export default App;