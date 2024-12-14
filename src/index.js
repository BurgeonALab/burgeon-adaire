// React
import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./components/BurgeonSchema";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BurgeonPreload } from "./components";
// Firebase
import "./services/Services";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Styles
import "./css/style.css";
import "./css/responsive.css";
// Cookie Consent
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));

const helmetContext = {};

function App() {
  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {},
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description: "Cookie modal description",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage Individual preferences",
            },
            preferencesModal: {
              title: "Manage cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Accept current selection",
              closeIconLabel: "Close modal",
              sections: [
                {
                  title: "Somebody said ... cookies?",
                  description: "I want one!",
                },
                {
                  title: "Strictly Necessary cookies",
                  description:
                    "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Performance and Analytics",
                  description:
                    "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                  linkedCategory: "analytics",
                },
                {
                  title: "More information",
                  description:
                    'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return (
    <Suspense fallback={<BurgeonPreload />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
