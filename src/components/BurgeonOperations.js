import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React, { Component, Suspense, lazy } from "react";
import { TickerTape } from "react-ts-tradingview-widgets";
import { handleViewport } from "react-in-viewport";
// jQuery
import $ from "jquery";

const BSmallValbury = lazy(() => import("./small/BSmallValbury"));
const BSmallNews = lazy(() => import("./small/BSmallNews"));
const BMediumOperations = lazy(() => import("./medium/BMediumOperations"));
const BMediumExtras = lazy(() => import("./medium/BMediumExtras"));

class BurgeonOperations extends Component {
  jQueryPath = (ViewportStatus) => {
    $(function () {
      if (ViewportStatus === "In Viewport") {
        window.history.pushState(
          {
            additionalInformation:
              "Operations section at PT. Burgeon Adaire International",
          },
          "Operations | PT. Burgeon Adaire International",
          "/operations"
        );
      }
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          hitoverlay: true,
          desc: "Diverse portfolio of companies and assets. Actively managed for growth and profit.",
          name: "Portfolio",
          link: "https://portfolio.burgeonadaire.com",
        },
        {
          id: 1,
          hitoverlay: false,
          desc: "Insights on finance and technology. Explore our thoughts and join the conversation.",
          name: "Blog",
          link: "https://blog.burgeonadaire.com",
        },
        {
          id: 2,
          hitoverlay: false,
          desc: "IT solutions and cloud innovation. Driving business growth through technology.",
          name: "The Adaire Solutions",
          link: "https://adairesolutions.com",
        },
      ],
    };
  }

  jQuery = () => {
    $("#overlay-hide-toggle").on("click", function () {
      $(".operation-container-overlay").toggleClass("width-70");
      $(".overlay-button").toggleClass("rotate-overlay-button");
      $(".overlay-content").toggleClass("hide-section");
      $(".operation-container-overlay-container").toggleClass(
        "pointer-events-none"
      );
      $(".operation-container-overlay").toggleClass("pointer-events-auto");
    });

    $("#overlay-hide-mobile-toggle").on("click", function () {
      $(".overlay-mobile-button").toggleClass("rotate-overlay-mobile-button");
      $(".hide-mobile-overlay-content").toggleClass("hide-section");
      $(".overlay-container-mobile-box").toggleClass("height-70");
      $(".overlay-container-mobile-box").toggleClass("width-70");
      $(".overlay-container-mobile-box").toggleClass(
        "border-radius-conditional-click"
      );
      $(".overlay-container-mobile").toggleClass(
        "padding-left-conditional-click"
      );
      $(".valbury-container-mobile").toggleClass(
        "margin-top-conditional-click"
      );
      $(".outro-container").toggleClass("margin-top-conditional-click");
      $(".overlay-container-mobile").toggleClass("pointer-events-none");
      $(".overlay-container-mobile-box").toggleClass("pointer-events-auto");
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
      <section
        ref={forwardedRef}
        id="operations"
        className="container-fluid py-3"
      >
        <div className="col-md-12 operation-container-overlay-container py-3">
          <div className="py-3 h-100 me-5">
            <div className="operation-container-overlay">
              <div className="d-flex flex-row justify-content-between align-items-center h-100">
                <div className="overlay-content margin-twentyfour-rl">
                  <h2 className="text-light">Operations</h2>
                  <p className="lead text-light mb-0">
                    Our work at{" "}
                    <strong>PT. Burgeon Adaire International</strong> touches on
                    a wide range of fields, from trading and investing to web
                    app development, media projects, and eCommerce. We focus on
                    bringing innovation and expertise to everything we do.
                  </p>
                  <a
                    href="mailto:geraldzandisko@burgeonadaire.com?subject=Company Profile Request"
                    className="btn btn-dark btn-cp"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="fw-medium">Get Our Company Profile</span>
                  </a>
                </div>
                <div className="margin-twentyfour-rl">
                  <a id="overlay-hide-toggle" role="button">
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="overlay-button link-light"
                      size="lg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-container-mobile">
          <div className="overlay-container-mobile-box h-100">
            <div className="hide-mobile-overlay-content">
              <h2 className="text-light padding-twentyfour-rl">Operations</h2>
              <p className="lead text-light mb-0 padding-twentyfour-rl">
                Our work at <strong>PT. Burgeon Adaire International</strong>{" "}
                touches on a wide range of fields, from trading and investing to
                web app development, media projects, and eCommerce. We focus on
                bringing innovation and expertise to everything we do.
              </p>
              <a
                href="mailto:geraldzandisko@burgeonadaire.com?subject=Company Profile Request"
                className="btn btn-dark btn-cp-mobile"
                target="_blank"
                rel="noopener"
              >
                <span className="fw-medium">Get Our Company Profile</span>
              </a>
            </div>
            <div className="d-flex justify-content-center padding-twentyfour-rl">
              <a id="overlay-hide-mobile-toggle" role="button">
                <FontAwesomeIcon
                  icon={faChevronUp}
                  className="overlay-mobile-button link-light"
                  size="lg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row operations-container">
          <div className="valbury-container-mobile col-xxl-3 py-3 d-flex flex-column">
            <Suspense fallback={<p className="d-none">Loading</p>}>
              <BSmallValbury />
            </Suspense>
            <Suspense fallback={<p className="d-none">Loading</p>}>
              <BSmallNews />
            </Suspense>
          </div>
          <div className="other-operations-container-mobile col-xxl-9 d-flex flex-column py-3">
            <div className="tradingview-bai-tickertape">
              <TickerTape
                symbols={[
                  {
                    proName: "PEPPERSTONE:XAUUSD",
                    title: "GOLD",
                  },
                  {
                    proName: "PEPPERSTONE:USDJPY",
                    title: "USD/JPY",
                  },
                  {
                    proName: "PEPPERSTONE:GBPUSD",
                    title: "GBP/USD",
                  },
                  {
                    proName: "PEPPERSTONE:EURUSD",
                    title: "EUR/USD",
                  },
                  {
                    proName: "PEPPERSTONE:NAS100",
                    title: "NASDAQ-100",
                  },
                  {
                    proName: "PEPPERSTONE:US500",
                    title: "S&P 500",
                  },
                  {
                    proName: "PEPPERSTONE:SPOTCRUDE",
                    title: "CRUDE OIL",
                  },
                  {
                    proName: "PEPPERSTONE:BTCUSD",
                    title: "BITCOIN",
                  },
                  {
                    proName: "PEPPERSTONE:SOLUSD",
                    title: "SOLANA",
                  },
                ]}
                colorTheme="dark"
              ></TickerTape>
            </div>
            <div className="flex-grow-1 operation-child-container">
              <div className="row h-100 portfolio-box-mobile">
                {this.state.items.map((data, index) =>
                  data.hitoverlay == true ? (
                    <div
                      key={index}
                      className="mobile-child-operations col-md-4"
                    >
                      <div className="portfolio-everything-mobile portfolio-box rounded p-4">
                        <div className="d-flex h-100 flex-column justify-content-between">
                          <div>
                            <a
                              className="text-decoration-none"
                              href={data.link}
                              target="_blank"
                              rel="noopener"
                            >
                              <h5 className="text-light">{data.name}</h5>
                            </a>
                            <p className="text-light mb-0">{data.desc}</p>
                          </div>
                          <div className="d-flex justify-content-end">
                            <span className="badge text-bg-danger">WIP</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="mobile-child-operations col-md-4"
                    >
                      <div className="portfolio-box rounded p-4">
                        <div className="d-flex h-100 flex-column justify-content-between">
                          <div>
                            <a
                              className="text-decoration-none"
                              href={data.link}
                              target="_blank"
                              rel="noopener"
                            >
                              <h5 className="text-light">{data.name}</h5>
                            </a>
                            <p className="text-light mb-0">{data.desc}</p>
                          </div>
                          <div className="d-flex justify-content-end">
                            <span className="badge text-bg-danger">WIP</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
                <Suspense fallback={<p className="d-none">Loading</p>}>
                  <BMediumOperations />
                </Suspense>
              </div>
            </div>
            <BMediumExtras />
          </div>
        </div>
      </section>
    );
  }
}

const OperationsSection = handleViewport(BurgeonOperations, {
  rootMargin: "-1.0px",
});

export default OperationsSection;
