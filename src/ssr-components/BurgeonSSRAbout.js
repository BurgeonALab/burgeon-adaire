import React, { Component, Fragment } from "react";

export default class BurgeonSSRAbout extends Component {
  render() {
    return (
      <Fragment>
        <div className="about-container d-flex flex-row">
          <div className="about-box py-3 w-50 padding-twelve-rl">
            <div className="about-item about-item-blue rounded p-4">
              <div className="h-100 position-relative">
                <div className="d-flex flex-column justify-content-center h-100">
                  <h3 className="about-leftbox-header-mobile text-light text-center">
                    Lorem Ipsum
                  </h3>
                  <p className="about-leftbox-description-mobile text-light text-center mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="justify-content-end position-absolute bottom-0">
                  <p className="about-credit-mobile text-light lead fw-medium mb-0">
                    Photo credit
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-box py-3 w-50 padding-twelve-rl">
            <div className="about-item about-item-brown rounded p-4">
              <div className="position-relative h-100">
                <div className="about-rightbox-focus-mobile">
                  <div className="about-rightbox-focus p-4 rounded">
                    <h3 className="text-light">Lorem Ipsum</h3>
                    <p className="text-light mb-0">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="justify-content-end position-absolute bottom-0">
                  <p className="about-credit-mobile text-light lead fw-medium mb-0">
                    Photo credit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
