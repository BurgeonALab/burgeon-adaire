__webpack_public_path__ = process.env.ASSET_PATH;
// React
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
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

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<BurgeonPreload />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
