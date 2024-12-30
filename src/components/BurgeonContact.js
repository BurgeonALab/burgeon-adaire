import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
// jQuery
import $ from "jquery";

export default class BurgeonContact extends Component {
  jQuery = () => {
    $(function () {
      $("#contact-button").on("click", function () {
        $(".contact-content").toggleClass("show-contact-content");
        $("#chevron-nav-contact").toggleClass("rotate-overlay-button");
      });
    });
  };

  componentDidMount() {
    this.jQuery();
  }

  render() {
    return (
      <div className="contact-mobile contact-container">
        <div className="contact-box ms-5 shadow">
          <div className="d-flex flex-column">
            <a
              id="contact-button"
              role="button"
              className="link-light text-decoration-none p-3"
            >
              <p className="d-flex align-items-center justify-content-between mb-0 fw-medium">
                Make a Call
                <FontAwesomeIcon
                  id="chevron-nav-contact"
                  icon={faChevronUp}
                  className="ms-3"
                  size="sm"
                />
              </p>
            </a>
            <div className="contact-content">
              <div className="position-absolute d-flex flex-row justify-content-between w-100 end-0 p-3">
                <div className="d-flex flex-row">
                  <a className="me-2 contact-button-zoom" role="button"></a>
                  <a className="contact-button-colorful" role="button"></a>
                </div>
                <div>
                  <a role="button" className="contact-button-redbai"></a>
                </div>
              </div>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src="https://images.burgeonadaire.com/gerald_zandisko_cp.webp"
                height={320}
              ></img>
              <div
                className="position-absolute bottom-0 p-3 w-100"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(18, 18, 23, 0), rgba(18, 18, 23, 1))",
                }}
              >
                <span className="lead fw-medium d-flex align-items-center justify-content-center pb-3">
                  Gerald Zandisko
                </span>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <a
                    href="mailto:geraldzandisko@burgeonadaire.com"
                    className="mx-2 contact-button-colorful-small d-flex align-items-center justify-content-center text-decoration-none"
                  >
                    <FontAwesomeIcon
                      id="chevron-nav-contact"
                      icon={faEnvelope}
                      size="lg"
                      color="white"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/geraldzandisko/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 contact-button-colorful-small d-flex align-items-center justify-content-center text-decoration-none"
                  >
                    <FontAwesomeIcon
                      id="chevron-nav-contact"
                      icon={faLinkedin}
                      size="lg"
                      color="white"
                    />
                  </a>
                  <a
                    href="https://github.com/geraldzandisko"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 contact-button-colorful-small d-flex align-items-center justify-content-center text-decoration-none"
                  >
                    <FontAwesomeIcon
                      id="chevron-nav-contact"
                      icon={faGithub}
                      size="lg"
                      color="white"
                    />
                  </a>
                  <a
                    href="https://www.threads.net/@geraldzandisko"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 contact-button-colorful-small d-flex align-items-center justify-content-center text-decoration-none"
                  >
                    <FontAwesomeIcon
                      id="chevron-nav-contact"
                      icon={faThreads}
                      size="lg"
                      color="white"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
