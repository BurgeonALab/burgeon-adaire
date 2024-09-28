// React
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {
  HelmetProvider,
} from 'react-helmet-async';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {
  BurgeonPreload,
} from './components';
// jQuery
import $ from 'jquery';
// Firebase
import './services/Services'
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Styles
import './css/style.css';
import './css/responsive.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

const helmetContext = {};

function App() {
  return (
    <Suspense fallback={<BurgeonPreload />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/cookie-policy' element={<CookiePolicy />} />
          <Route path='/terms-and-condition' element={<TermsConditions />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <HelmetProvider context={helmetContext}>
    <App />
  </HelmetProvider>
);
