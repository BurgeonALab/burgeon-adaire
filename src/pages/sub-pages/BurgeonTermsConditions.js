import React, { Component, Fragment } from "react";
import { handleViewport } from "react-in-viewport";
// jQuery
import $ from "jquery";

class BurgeonSubTermsConditions extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  jQueryPath = (ViewportStatus) => {
    $(function () {
      if (ViewportStatus === "In Viewport") {
        window.history.pushState(
          {
            additionalInformation:
              "Cookie Policy at PT. Burgeon Adaire International",
          },
          "Cookie Policy | PT. Burgeon Adaire International",
          "/legal/cookie-policy"
        );
      }
    });
  };

  render() {
    const { forwardedRef, inViewport } = this.props;
    const ViewportStatus = inViewport ? "In Viewport" : "Not In Viewport";

    if (ViewportStatus === "In Viewport") {
      this.jQueryPath(ViewportStatus);
    } else {
      this.jQueryPath(ViewportStatus);
    }

    return (
      <Fragment>
        <section ref={forwardedRef}>
          <div
            className="container-fluid py-3"
            style={{ height: "100vh", marginTop: "96px" }}
          >
            <div className="row">
              <div className="col-md-12 py-3">
                <h1 className="text-light text-center">Terms and Conditions</h1>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const TermsConditionsSections = handleViewport(BurgeonSubTermsConditions, {
  rootMargin: "-1.0px",
});

export default TermsConditionsSections;
