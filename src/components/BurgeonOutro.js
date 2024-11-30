import React, { Component, Fragment } from "react";
import { handleViewport } from "react-in-viewport";
// jQuery
import $ from "jquery";

class BurgeonOutro extends Component {
  jQuery = (ViewportStatus) => {
    $(function () {
      if (ViewportStatus === "In Viewport") {
        window.history.pushState(
          {
            additionalInformation:
              "Acknowledgment section at PT. Burgeon Adaire International",
          },
          "Acknowledgment | PT. Burgeon Adaire International",
          "/acknowledgment"
        );
      }
    });
  };

  render() {
    const { forwardedRef, inViewport } = this.props;
    const ViewportStatus = inViewport ? "In Viewport" : "Not In Viewport";

    if (ViewportStatus === "In Viewport") {
      this.jQuery(ViewportStatus);
    } else {
      this.jQuery(ViewportStatus);
    }

    return (
      <Fragment>
        <section
          ref={forwardedRef}
          id="acknowledgment"
          className="outro-container container-fluid py-3 d-flex"
        >
          <div className="outro-container-gradient"></div>
          <div className="outro-container-background">
            <img
              className="outro-cover"
              alt="Gratitude Photo"
              src="https://images.burgeonadaire.com/outro-cover.webp"
            ></img>
          </div>
          <div className="outro-header-box outro-header-mobile pointer-events-auto position-absolute h-100">
            <h2 className="text-light">Gratitude</h2>
            <p className="lead text-light mb-0">
              We are truly grateful for all the people and organizations who
              have shaped our journey. Thank you to those who have collaborated
              with us, supported our vision, and challenged us to grow. These
              relationships have shaped who we are. Our progress is a testament
              to your impact.
            </p>
          </div>
          <div className="outro-credit outro-credit-mobile position-absolute h-100 d-flex align-items-end py-4">
            <p className="lead text-light fw-medium mb-0">Photo credit</p>
          </div>
          <div className="outro-box outro-mobile col-md-12 d-flex align-items-end justify-content-end flex-column">
            <img
              src="https://images.burgeonadaire.com/a-tiger-and-an-ox.webp"
              height={448}
              className="tiger-ox"
              alt="A tiger and an ox fighting outside a cave in the mountains"
            ></img>
            <p className="outro-text-mobile h4 mt-4 mb-0 text-end">
              <a
                className="outro-link-mobile link-light text-decoration-none pointer-events-auto"
                href="https://wellcomecollection.org/works/w9kd2eed/images?id=uf2897g8"
                target="_blank"
                rel="noopener"
              >
                <span className="fw-light">
                  A tiger and an ox fighting outside a cave in the mountains
                </span>
                <small className="text-light-50 ms-2">
                  Etching by JE Ridinger
                </small>
              </a>
            </p>
          </div>
        </section>
      </Fragment>
    );
  }
}

const OutroSections = handleViewport(BurgeonOutro, {
  rootMargin: "-1.0px",
});

export default OutroSections;
