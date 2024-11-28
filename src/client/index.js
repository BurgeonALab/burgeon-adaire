// SSR Visible
import "../functions/SSRFoucReady";
// Schema
import "../ssr-components/BurgeonSSRSchema";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Styles
import "../css/style.css";
import "../css/responsive.css";
// React
import { hydrateRoot } from "react-dom/client";
import App from "./App";
// Router
import { BrowserRouter } from "react-router-dom";

hydrateRoot(
  document,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
