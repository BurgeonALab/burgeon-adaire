import React from 'react';
import { Route, Routes } from "react-router-dom";
import {
  BurgeonSSRCookie,
  BurgeonSSRPolicy,
  BurgeonSSRTAC,
  BurgeonSSRHome,
} from '../ssr-pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BurgeonSSRHome />} />
      <Route path="/privacy-policy" element={<BurgeonSSRPolicy />} />
      <Route path="/cookie-policy" element={<BurgeonSSRCookie />} />
      <Route path="/terms-and-condition" element={<BurgeonSSRTAC />} />
    </Routes>
  );
}

export default App;