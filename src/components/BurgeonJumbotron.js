import React, { Component, Suspense, lazy } from "react";
import Slider from "react-slick";
import { handleViewport } from "react-in-viewport";
// jQuery
import $ from "jquery";

const settings = {
  infinite: false,
  slidesToShow: 1,
  speed: 500,
  variableWidth: true,
};

const BSmallSSRJumbotronSlider = lazy(() =>
  import("./small/BSmallJumbotronSlider")
);

class BurgeonJumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        {
          vname: "Development",
          description: "We continuously grow, improve, and adapt.",
        },
        {
          vname: "Cooperation",
          description: "We value collaboration and strong partnerships.",
        },
        {
          vname: "Mastery",
          description: "We pursue excellence and deliver exceptional results.",
        },
        {
          vname: "Trustworthiness",
          description: "We build trust through integrity and reliability.",
        },
      ],
    };
  }

  jQueryPath = (ViewportStatus) => {
    $(function () {
      if (ViewportStatus === "In Viewport") {
        window.history.pushState(
          {
            additionalInformation:
              "Main section at PT. Burgeon Adaire International",
          },
          "Driving the Future | PT. Burgeon Adaire International",
          "/"
        );
      }
    });
  };

  jQuery = () => {
    $(function () {
      $(window).on("scroll", function () {
        if ($(document).scrollTop() > 24) {
          $(".jumbotron-logo").css("transform", "rotate(180deg)");
        } else {
          $(".jumbotron-logo").css("transform", "rotate(0deg)");
        }
      });
    });
  };

  componentDidMount() {
    this.jQuery();
  }

  render() {
    const { forwardedRef, inViewport } = this.props;
    const ViewportStatus = inViewport ? "In Viewport" : "Not In Viewport";

    if (ViewportStatus === "In Viewport") {
      this.jQueryPath(ViewportStatus);
    } else {
      this.jQueryPath(ViewportStatus);
    }

    return (
      <section ref={forwardedRef}>
        <div className="bai-jumbotron d-flex align-items-center justify-content-center">
          <video
            aria-label="Green Smoke Stock Videos by Vecteezy, Modified by PT. Burgeon Adaire International"
            aria-details="https://www.vecteezy.com/free-videos/green-smoke"
            id="jumbotron-player"
            poster="https://images.burgeonadaire.com/new_bai_img/green_smoke_img_compressed.webp"
            autoPlay
            loop
            muted
          >
            <source
              src="https://resources.burgeonadaire.com/new_bai_vid/green_smoke_compressed.mp4"
              type="video/mp4"
            ></source>
          </video>
          <div className="jumbotron-overlay d-flex flex-column justify-content-center">
            <div className="jumbotron-overlay-text-box mb-4">
              <h1 className="text-light text-end h3">
                PT. Burgeon Adaire International
              </h1>
              <p className="text-light text-end mb-0">
                Our core values shape our identity and guide us toward success,
                driving our decisions and helping us achieve our goals
                consistently.
              </p>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                {this.state.values.map((data, i) => (
                  <Suspense key={i}>
                    <BSmallSSRJumbotronSlider
                      DataTitle={data.vname}
                      DataDescription={data.description}
                    />
                  </Suspense>
                ))}
              </Slider>
            </div>
          </div>
          <img
            style={{ opacity: "0%" }}
            src="https://images.burgeonadaire.com/new_bai_img/new_logo.webp"
            alt="PT. Burgeon Adaire International Logo"
            className="jumbotron-logo d-block jumbotron-logo-reveal"
          ></img>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              backgroundImage: "linear-gradient(transparent, #000707)",
              alignSelf: "end",
              width: "100%",
              height: "50%",
            }}
          ></div>
        </div>
      </section>
    );
  }
}

const MainSections = handleViewport(BurgeonJumbotron, {
  rootMargin: "-1.0px",
});

export default MainSections;
