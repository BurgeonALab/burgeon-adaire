import React, { Component, Fragment } from "react";
import { handleViewport } from "react-in-viewport";
// jQuery
import $ from "jquery";

class BurgeonSubCookiePolicy extends Component {
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
                <h1 className="text-light text-center">Cookie Policy</h1>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const CookiePolicySections = handleViewport(BurgeonSubCookiePolicy, {
  rootMargin: "-1.0px",
});

export default CookiePolicySections;
