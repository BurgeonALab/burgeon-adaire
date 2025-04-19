import React from "react";
import { BurgeonFooter } from "../components";
import { BrowserRouter, Routes, Route } from "react-router";

import {
  HomePage,
  PrivacyPolicy,
  CookiePolicy,
  TermsConditions,
} from "../pages";

export default function PageLayout({ currentYear }) {
  console.log("Year: " + currentYear);
  return (
    <div className="bottom-footer-container">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage selectedSection="Home" />} />
          <Route
            exact
            path="/identity"
            element={<HomePage selectedSection="Identity" />}
          />
          <Route
            exact
            path="/operations"
            element={<HomePage selectedSection="Operations" />}
          />
          <Route
            exact
            path="/acknowledgment"
            element={<HomePage selectedSection="Acknowledgment" />}
          />
          <Route
            exact
            path="/partners"
            element={<HomePage selectedSection="Partners" />}
          />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/cookie-policy" element={<CookiePolicy />} />
          <Route
            path="/legal/terms-and-conditions"
            element={<TermsConditions />}
          />

          {/* 404 - For now */}
          <Route path="*" element={<HomePage />} />
        </Routes>
        <BurgeonFooter currentYear={currentYear} />
      </BrowserRouter>
    </div>
  );
}
