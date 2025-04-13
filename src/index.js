// React
import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./components/BurgeonSchema";
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
import PageLayout from "./components/layout";

import BurgeonCookieConsent from "./components/BurgeonCookieConsent";

const helmetContext = {};

function App() {
  const [sectionPos, setSectionPos] = useState("");

  useEffect(() => {
    setSectionPos("Home");
  }, []);

  console.log(sectionPos);

  return (
    <Suspense fallback={<BurgeonPreload />}>
      <BurgeonCookieConsent />
      <PageLayout />
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
