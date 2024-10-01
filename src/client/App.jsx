import React, {
  lazy,
  Suspense,
} from 'react';
import {
  BurgeonSSRPreload,
} from '../ssr-components';
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

const SSRHomePage = lazy(() => import('../ssr-pages/BurgeonSSRHome'));
const SSRPrivacyPolicy = lazy(() => import('../ssr-pages/BurgeonSSRPolicy'));
const SSRCookiePolicy = lazy(() => import('../ssr-pages/BurgeonSSRCookie'));
const SSRTermsConditions = lazy(() => import('../ssr-pages/BurgeonSSRTAC'));

const helmetContext = {};

const App = () => {
  return (
    <Suspense fallback={<BurgeonSSRPreload />}>
      <HelmetProvider context={helmetContext}>
        <Routes>
          <Route path="/" element={<SSRHomePage />} />
          <Route path="/privacy-policy" element={<SSRPrivacyPolicy />} />
          <Route path="/cookie-policy" element={<SSRCookiePolicy />} />
          <Route path="/terms-and-conditions" element={<SSRTermsConditions />} />
        </Routes>
      </HelmetProvider>
    </Suspense>
  );
}

export default App;