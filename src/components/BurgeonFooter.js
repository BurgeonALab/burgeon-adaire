import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { TheOrg, PitchBook } from "./vectors";
import { ReactSVG } from "react-svg";
import { handleViewport } from "react-in-viewport";
// jQuery
import $ from "jquery";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

class BurgeonFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footericon: [
        {
          id: 0,
          type: "symbol",
          desc: "PT. Burgeon Adaire International's Instagram Profile Page",
          link: "https://www.instagram.com/burgeonadaire",
          icon: faInstagram,
        },
        {
          id: 1,
          type: "symbol",
          desc: "PT. Burgeon Adaire International's LinkedIn Profile Page",
          link: "https://linkedin.com/company/burgeonadaire",
          icon: faLinkedin,
        },
        {
          id: 2,
          type: "symbol",
          desc: "PT. Burgeon Adaire International's Twitter X Profile Page",
          link: "https://twitter.com/burgeonadaire",
          icon: faXTwitter,
        },
        {
          id: 3,
          type: "symbol",
          desc: "PT. Burgeon Adaire International's GitHub Page",
          link: "https://github.com/BurgeonALab",
          icon: faGithub,
        },
        {
          id: 4,
          type: "svg",
          desc: "PT. Burgeon Adaire International's The Org Profile Page",
          link: "https://bit.ly/3SWvfNS",
          icon: TheOrg,
          height: "auto",
          width: "28px",
          classname:
            "social-media-footer-items-org social-media-footer-mobile-links mt-3 d-flex justify-content-center align-items-center",
        },
        {
          id: 5,
          type: "svg",
          desc: "PT. Burgeon Adaire International's PitchBook Profile Page",
          link: "https://pitchbook.com",
          icon: PitchBook,
          height: "28px",
          width: "auto",
          classname:
            "social-media-footer-items-pitchbook social-media-footer-mobile-links mt-3 d-flex justify-content-center align-items-center",
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
              "Footer section at PT. Burgeon Adaire International",
          },
          "Driving the Future | PT. Burgeon Adaire International",
          "/"
        );
      }
    });
  };

  jQuery = () => {
    // The Org - Hover
    $(".social-media-footer-items-org").on("mouseenter", function () {
      $(".burgeon-adaire-link-svg-inside>path").attr(
        "style",
        "fill: #8B0000 !important;"
      );
    });

    $(".social-media-footer-items-org").on("mouseleave", function () {
      $(".burgeon-adaire-link-svg-inside>path").attr(
        "style",
        "fill: #FFFFFF !important;"
      );
    });

    // PitchBook - Hover
    $(".social-media-footer-items-pitchbook").on("mouseenter", function () {
      $(".burgeon-adaire-link-svg-inside > g > g > path").attr(
        "style",
        "fill: #8B0000 !important;"
      );
    });

    $(".social-media-footer-items-pitchbook").on("mouseleave", function () {
      $(".burgeon-adaire-link-svg-inside > g > g > path").attr(
        "style",
        "fill: #FFFFFF !important;"
      );
    });

    // The Org and PitchBook Click
    $(".social-media-footer-items-org").on("click", function () {
      $(".burgeon-adaire-link-svg-inside>path").attr(
        "style",
        "fill: #8B0000 !important;"
      );
    });

    $(".social-media-footer-items-pitchbook").on("click", function () {
      $(".burgeon-adaire-link-svg-inside > g > g > path").attr(
        "style",
        "fill: #8B0000 !important;"
      );
    });
  };

  componentDidMount() {
    this.jQuery();
  }

  render() {
    function removeHash(name) {
      var urlPath = name.toString();
      var newURL = "/" + urlPath;
      var urlPathCap = urlPath.charAt(0).toUpperCase() + urlPath.slice(1);
      var newTitle = urlPathCap + " | PT. Burgeon Adaire International";
      var newState = {
        additionalInformation:
          urlPathCap + " section at PT. Burgeon Adaire International",
      };

      window.history.pushState(newState, newTitle, newURL);
    }

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
          <div className="footer text-light">
            <hr className="footer-hr" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-7 p-0">
                      <div className="footer-image-container d-flex align-items-start pt-4 ps-4">
                        <p className="lead text-light fw-medium mb-0">
                          Photo credit
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5 p-4">
                      <div className="row">
                        <div className="col-md-6 d-flex flex-column justify-content-end">
                          <div className="mt-3">
                            <p className="lead fw-bold mb-0">Portfolio</p>
                            <div className="link-blank-space footer-link-right-mobile">
                              <a
                                className="text-decoration-none link-light"
                                href="https://www.myfxbook.com/members/gerraour"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="burgeon-adaire-link footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Myfxbook
                                </p>
                              </a>
                              <a
                                className="text-decoration-none link-light"
                                href="https://portfolio.burgeonadaire.com"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="burgeon-adaire-link footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Investments
                                </p>
                              </a>
                            </div>
                          </div>
                          <div className="footer-link-box-mobile mt-3">
                            <p className="lead fw-bold mb-0">Associates</p>
                            <div className="link-blank-space footer-link-right-mobile">
                              <a
                                className="text-decoration-none link-light"
                                href="https://geraldzandisko.burgeonadaire.com"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="burgeon-adaire-link footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Gerald Zandisko
                                </p>
                              </a>
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                href="https://adairesolutions.com"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="footer-item-link-mobile mb-0 mt-3 fw-light">
                                  The Adaire Solutions
                                </p>
                              </a>
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                href="https://org.burgeonadaire.com"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Organizations
                                </p>
                              </a>
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                href="https://shop.burgeonadaire.com"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="footer-item-link-mobile mb-0 mt-3 fw-light">
                                  PT. Burgeon Energyworks Industries
                                </p>
                              </a>
                            </div>
                          </div>
                          <div className="footer-link-box-mobile mt-3">
                            <p className="lead fw-bold mb-0">Company</p>
                            <div className="link-blank-space footer-link-right-mobile">
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                role="button"
                                onClick={() => {
                                  gsap.to(window, {
                                    duration: 0.1,
                                    scrollTo: "#abstract",
                                  });
                                  var name = $(".nav1").html().toLowerCase();
                                  removeHash(name);
                                }}
                              >
                                <p className="bai-footer-link footer-item-link-mobile mb-0 mt-3 fw-light nav1">
                                  Identity
                                </p>
                              </a>
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                role="button"
                                onClick={() => {
                                  gsap.to(window, {
                                    duration: 0.1,
                                    scrollTo: "#operations",
                                  });
                                  var name = $(".nav2").html().toLowerCase();
                                  removeHash(name);
                                }}
                              >
                                <p className="bai-footer-link footer-item-link-mobile mb-0 mt-3 fw-light nav2">
                                  Operations
                                </p>
                              </a>
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                role="button"
                                onClick={() => {
                                  gsap.to(window, {
                                    duration: 0.1,
                                    scrollTo: "#acknowledgment",
                                  });
                                  var name = $(".nav3").html().toLowerCase();
                                  removeHash(name);
                                }}
                              >
                                <p className="bai-footer-link footer-item-link-mobile mb-0 mt-3 fw-light nav3">
                                  Acknowledgment
                                </p>
                              </a>
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                role="button"
                                onClick={() => {
                                  gsap.to(window, {
                                    duration: 0.1,
                                    scrollTo: "#partners",
                                  });
                                  var name = $(".nav4").html().toLowerCase();
                                  removeHash(name);
                                }}
                              >
                                <p className="bai-footer-link footer-item-link-mobile mb-0 mt-3 fw-light nav4">
                                  Partners
                                </p>
                              </a>
                            </div>
                          </div>
                          <div className="footer-link-box-mobile mt-3">
                            <p className="lead fw-bold mb-0">Link</p>
                            <div className="link-blank-space footer-link-right-mobile">
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                href="https://burgeonadaire.com/legal/privacy-policy"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Privacy Policy
                                </p>
                              </a>
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                href="https://burgeonadaire.com/legal/cookie-policy"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Cookie Policy
                                </p>
                              </a>
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                href="https://burgeonadaire.com/legal/terms-and-conditions"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Terms & Conditions
                                </p>
                              </a>
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                href="https://blog.burgeonadaire.com"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Blog
                                </p>
                              </a>
                              <a
                                role="button"
                                data-cc="show-preferencesModal"
                                className="burgeon-adaire-link text-decoration-none link-light"
                              >
                                <p className="footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Cookie Preferences
                                </p>
                              </a>
                            </div>
                          </div>
                          <div className="footer-link-box-mobile mt-3">
                            <p className="lead fw-bold mb-0">Resources</p>
                            <div className="link-blank-space footer-link-right-mobile">
                              <a
                                className="burgeon-adaire-link text-decoration-none link-light"
                                href="https://portal.burgeonadaire.com"
                                target="_blank"
                                rel="noopener"
                              >
                                <p className="footer-item-link-mobile mb-0 mt-3 fw-light">
                                  Portal
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="social-media-footer-mobile col-md-6 d-flex flex-column justify-content-end">
                          <div className="social-media-footer-mobile-items mb-0 d-flex flex-column align-items-end">
                            {this.state.footericon.map((element, i) =>
                              element.type === "symbol" ? (
                                <div
                                  key={i}
                                  className="social-media-footer-mobile-links mt-3 d-flex justify-content-center align-items-center"
                                >
                                  <a
                                    className="d-block"
                                    href={element.link}
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <FontAwesomeIcon
                                      icon={element.icon}
                                      className="burgeon-adaire-link link-light"
                                      size="2xl"
                                    />
                                  </a>
                                </div>
                              ) : (
                                <div key={i} className={element.classname}>
                                  <a
                                    className="d-block"
                                    href={element.link}
                                    target="_blank"
                                    rel="noopener"
                                  >
                                    <ReactSVG
                                      beforeInjection={(svg) => {
                                        svg.classList.add(
                                          "burgeon-adaire-link-svg-inside"
                                        );
                                        svg.setAttribute(
                                          "style",
                                          "height: " +
                                            element.height +
                                            "; width: " +
                                            element.width +
                                            ";"
                                        );
                                      }}
                                      desc={element.desc}
                                      src={element.icon}
                                    />
                                  </a>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 mt-5 footer-text-mobile">
                        © 2025 <strong>PT. Burgeon Adaire International</strong>
                        . All rights reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const FooterSections = handleViewport(BurgeonFooter, {
  rootMargin: "-1.0px",
});

export default FooterSections;
