import React, { Component, Fragment } from "react";
import { BurgeonNavbar, BurgeonContact } from "../components";
import { BurgeonSubTermsConditions } from "./sub-pages";
import { BurgeonSEO } from "../components/BurgeonSEO";

export default class TermsConditions extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Terms and Conditions | PT. Burgeon Adaire International"
          description="Terms and Conditions."
          canonical="https://burgeonadaire.com/terms-and-conditions"
        />
        <div className="bottom-footer-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonContact />
                <BurgeonNavbar />
                <BurgeonSubTermsConditions />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
