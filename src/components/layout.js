import React, { lazy } from "react";
import { BurgeonFooter } from "../components";
import { BrowserRouter, Routes, Route } from "react-router";

const HomePage = lazy(() => import("../pages/HomePage"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("../pages/CookiePolicy"));
const TermsConditions = lazy(() => import("../pages/TermsConditions"));
const BurgeonNotFound = lazy(() =>
  import("../pages/sub-pages/BurgeonNotFound")
);

export default function PageLayout({ sectionScroll }) {
  return (
    <div className="bottom-footer-container">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage selectedSection="Home" />} />
          <Route
            exact
            path="/identity"
            element={
              <HomePage
                selectedSection="Identity"
                currectSection={sectionScroll}
              />
            }
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
        <BurgeonFooter />
      </BrowserRouter>
    </div>
  );
}
