import React from 'react';
import { Route, Routes } from "react-router-dom";
import {
  BurgeonSSRHome,
  BurgeonSSRPolicy,
  BurgeonSSRCookie,
  BurgeonSSRTAC,
} from '../ssr-pages'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BurgeonSSRHome />} />
      <Route path="/privacy-policy" element={<BurgeonSSRPolicy />} />
      <Route path="/cookie-policy" element={<BurgeonSSRCookie />} />
      <Route path="/terms-and-conditions" element={<BurgeonSSRTAC />} />
    </Routes>
  );
}

export default App;