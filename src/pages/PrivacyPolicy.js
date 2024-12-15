import React, { Component, Fragment } from "react";
import { BurgeonNavbar, BurgeonFooter, BurgeonContact } from "../components";
import { BurgeonSubPrivacyPolicy } from "./sub-pages";
import { BurgeonSEO } from "../components/BurgeonSEO";

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Privacy Policy | PT. Burgeon Adaire International"
          description="Privacy Policy."
          canonical="https://burgeonadaire.com/privacy-policy"
        />
        <div className="bottom-footer-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonContact />
                <BurgeonNavbar />
                <BurgeonSubPrivacyPolicy />
              </div>
            </div>
          </div>
          {/* <BurgeonFooter /> */}
        </div>
      </Fragment>
    );
  }
}
