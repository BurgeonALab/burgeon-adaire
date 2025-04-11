import React, { Component, Fragment } from "react";
import { BurgeonNavbar, BurgeonContact } from "../components";
import { BurgeonSubCookiePolicy } from "./sub-pages";
import { BurgeonSEO } from "../components/BurgeonSEO";

export default class CookiePolicy extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Cookie Policy | PT. Burgeon Adaire International"
          description="Cookie Policy."
          canonical="https://burgeonadaire.com/cookie-policy"
        />
        <div className="bottom-footer-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonContact />
                <BurgeonNavbar />
                <BurgeonSubCookiePolicy />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
