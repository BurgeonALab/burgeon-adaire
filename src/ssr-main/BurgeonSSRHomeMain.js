import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import {
  BurgeonSSRHome,
  BurgeonSSRPolicy,
  BurgeonSSRCookie,
  BurgeonSSRTAC,
} from "../ssr-pages";

export default class BurgeonSSRHomeMain extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<BurgeonSSRHome />} />
        <Route path="/cookie-policy" element={<BurgeonSSRCookie />} />
        <Route path="/privacy-policy" element={<BurgeonSSRPolicy />} />
        <Route path="/terms-and-conditions" element={<BurgeonSSRTAC />} />
      </Routes>
    );
  }
}
