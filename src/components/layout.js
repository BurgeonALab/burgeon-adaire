import React, { lazy } from "react";
import { BurgeonFooter } from "../components";
import { BrowserRouter, Routes, Route } from "react-router";

const HomePage = lazy(() => import("../pages/HomePage"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("../pages/CookiePolicy"));
const TermsConditions = lazy(() => import("../pages/TermsConditions"));

export const PageLayout = () => {
  return (
    <div className="bottom-footer-container">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/identity" element={<HomePage />} />
          <Route path="/operations" element={<HomePage />} />
          <Route path="/acknowledgment" element={<HomePage />} />
          <Route path="/partners" element={<HomePage />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          <Route
            path="/legal/terms-and-conditions"
            element={<TermsConditions />}
          />
        </Routes>
      </BrowserRouter>
      <BurgeonFooter />
    </div>
  );
};
