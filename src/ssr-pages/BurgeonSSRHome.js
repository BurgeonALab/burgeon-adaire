import React, { Component } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  BurgeonSSRAbout,
  BurgeonSSRContacts,
  BurgeonSSRFooter,
  BurgeonSSRJumbotron,
  BurgeonSSRNavbar,
  BurgeonSSRPartners,
  BurgeonSSROutro,
} from "../ssr-components";

const helmetContext = {};

export default class BurgeonSSRHome extends Component {
  render() {
    return (
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Driving the Future | PT. Burgeon Adaire International</title>
          <meta
            name="description"
            content="PT. Burgeon Adaire International thrives in a dynamic landscape, offering insights and opportunities while building strong partnerships and consistently delivering exceptional value."
          />
        </Helmet>
        <div className="bottom-footer-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonSSRContacts />
                <BurgeonSSRNavbar />
                <BurgeonSSRJumbotron />
                <BurgeonSSRAbout />
                <BurgeonSSROutro />
                <BurgeonSSRPartners />
              </div>
            </div>
          </div>
          <BurgeonSSRFooter />
        </div>
      </HelmetProvider>
    );
  }
}
