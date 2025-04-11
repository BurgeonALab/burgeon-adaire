import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BurgeonSSRFooter } from "../ssr-components";

const helmetContext = {};

export default class BurgeonSSRCookie extends Component {
  render() {
    return (
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Cookie Policy | PT. Burgeon Adaire International</title>
        </Helmet>
        <div className="bottom-footer-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
          <BurgeonSSRFooter />
        </div>
      </HelmetProvider>
    );
  }
}
