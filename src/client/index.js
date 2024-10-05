// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Styles
import '../css/style.css';
import '../css/responsive.css';
import '../css/ssr.css';
// React
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const domNode = document.getElementById('root');

hydrateRoot(domNode,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);