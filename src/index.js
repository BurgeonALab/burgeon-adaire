// React
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./components/BurgeonSchema";
import { BrowserRouter, Routes, Route } from "react-router";
import { BurgeonPreload } from "./components";
// Firebase
import "./services/Services";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Styles
import "./css/style.css";
import "./css/responsive.css";
// Component
import { BurgeonFooter } from "./components";

const HomePage = lazy(() => import("./pages/HomePage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));

import BurgeonCookieConsent from "./components/BurgeonCookieConsent";

const helmetContext = {};

function App() {
  return (
    <Suspense fallback={<BurgeonPreload />}>
      <BurgeonCookieConsent />
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
    </Suspense>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>
);
