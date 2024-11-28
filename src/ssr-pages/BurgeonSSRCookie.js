import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const helmetContext = {};

export default class BurgeonSSRCookie extends Component {
  render() {
    return (
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Cookie Policy | PT. Burgeon Adaire International</title>
        </Helmet>
      </HelmetProvider>
    );
  }
}
