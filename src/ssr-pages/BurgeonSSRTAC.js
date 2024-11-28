import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const helmetContext = {};

export default class BurgeonSSRTAC extends Component {
  render() {
    return (
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Terms and Conditions | PT. Burgeon Adaire International</title>
        </Helmet>
      </HelmetProvider>
    );
  }
}
