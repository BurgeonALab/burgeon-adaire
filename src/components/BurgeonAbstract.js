import React, { Component } from "react";
import { handleViewport } from "react-in-viewport";
// jQuery
import $ from "jquery";

class BurgeonAbstract extends Component {
  jQuery = (ViewportStatus) => {
    $(function () {
      if (ViewportStatus === "In Viewport") {
        window.history.pushState(
          {
            additionalInformation:
              "Identity section at PT. Burgeon Adaire International",
          },
          "Identity | PT. Burgeon Adaire International",
          "/identity"
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
      <section
        ref={forwardedRef}
        id="abstract"
        className="container-fluid py-3"
      >
        <div className="row">
          <div className="col-xxl-8 c-abstract-box">
            <h1 className="text-light">
              <span>Identity:</span>
              <span className="fw-light"> Driving the Future</span>
            </h1>
            <p className="lead text-light">
              At <strong>PT. Burgeon Adaire International</strong>, we navigate
              the modern market with a focus on growth. We constantly learn and
              adapt, creating value for our clients and partners. We believe in
              collaboration and build strong relationships. We're also committed
              to exploring new avenues and expanding our expertise.
            </p>
          </div>
          <div className="sky-video-box-mobile offset-xxl-1 col-xxl-3">
            <div className="sky-video-content position-relative rounded">
              <video
                id="abstract-player"
                className="w-100 h-100 object-fit-cover rounded"
                poster="https://images.burgeonadaire.com/sky_thumbnail.webp"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://resources.burgeonadaire.com/videos/sky.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const AbstractSection = handleViewport(BurgeonAbstract, {
  rootMargin: "-1.0px",
});

export default AbstractSection;
