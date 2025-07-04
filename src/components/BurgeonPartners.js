import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import { handleViewport } from "react-in-viewport";
// jQuery
import $ from "jquery";

class BurgeonPartners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stacks: [
        {
          id: 0,
          name: "Amazon Web Services",
          desc: "Powered by AWS Cloud Computing.",
          logo: "https://d0.awsstatic.com/logos/powered-by-aws-white.png",
          link: "https://aws.amazon.com",
        },
        {
          id: 1,
          name: "Microsoft",
          desc: "Powered by Microsoft Suites.",
          logo: "https://images.burgeonadaire.com/microsoft.webp",
          link: "https://www.microsoft.com",
        },
        {
          id: 2,
          name: "Firebase",
          desc: "Powered by Firebase.",
          logo: "https://images.burgeonadaire.com/firebase.webp",
          link: "https://firebase.google.com",
        },
        {
          id: 3,
          name: "Red Hat",
          desc: "We use Red Hat Enterprise Linux to develop our systems.",
          logo: "https://images.burgeonadaire.com/red-hat.webp",
          link: "https://www.redhat.com",
        },
        {
          id: 4,
          name: "PostgreSQL",
          desc: "We use PostgreSQL to maintain our database systems.",
          logo: "https://images.burgeonadaire.com/postgresql.webp",
          link: "https://www.postgresql.org",
        },
        {
          id: 5,
          name: "MongoDB",
          desc: "We also use MongoDB to maintain our database systems.",
          logo: "https://images.burgeonadaire.com/mongodb.webp",
          link: "https://www.mongodb.com",
        },
        {
          id: 6,
          name: "cTrader",
          desc: "We use cTrader to conduct our trading transactions.",
          logo: "https://images.burgeonadaire.com/ctrader.webp",
          link: "https://ctrader.com",
        },
      ],
      associates: [
        {
          id: 0,
          name: "Valbury Asia Group",
          desc: "Valbury Asia Group Wealth Management",
          logo: "https://images.burgeonadaire.com/valbury.webp",
          link: "https://valbury.co.id/sales/trading-valbury?fc=VMD1059F",
        },
        {
          id: 1,
          name: "Gerald Zandisko",
          desc: "Gerald Zandisko's Home page",
          logo: "https://images.burgeonadaire.com/gerald-zandisko.webp",
          link: "https://geraldzandisko.burgeonadaire.com",
        },
        {
          id: 2,
          name: "PT. The Adaire Solutions",
          desc: "PT. The Adaire Solutions's Home page",
          logo: "https://images.burgeonadaire.com/adaire-solutions.webp",
          link: "https://adairesolutions.com",
        },
        {
          id: 3,
          name: "Lions Club International",
          desc: "Lions Club International's Home page",
          logo: "https://images.burgeonadaire.com/lions-club-international.webp",
          link: "https://lionsclubs.org",
        },
        {
          id: 4,
          name: "Junior Chamber International",
          desc: "Junior Chamber International's Home page",
          logo: "https://images.burgeonadaire.com/jci-logo.webp",
          link: "https://jci.cc",
        },
        {
          id: 5,
          name: "The Buddhist Society",
          desc: "The Buddhist Society's Home page",
          logo: "https://images.burgeonadaire.com/the-buddhist-society.webp",
          link: "https://thebuddhistsociety.org",
        },
        {
          id: 6,
          name: "Start Up and Fly",
          desc: "Start Up and Fly's Home Page",
          logo: "https://images.burgeonadaire.com/start-up-and-fly.webp",
          link: "https://startupandfly.com",
        },
        {
          id: 7,
          name: "Nunchuk",
          desc: "Nunchuk's Home Page",
          logo: "https://images.burgeonadaire.com/nunchuk.webp",
          link: "https://nunchuk.io",
        },
        {
          id: 8,
          name: "AudaCity Capital",
          desc: "AudaCity's Home Page",
          logo: "https://images.burgeonadaire.com/new_bai_img/Audacity_cap_logo.png",
          link: "https://www.audacity.capital",
        },
        {
          id: 9,
          name: "HF Markets",
          desc: "HF Markets's Home Page",
          logo: "https://images.burgeonadaire.com/hf_markets.png",
          link: "https://hfm.com",
        },
      ],
    };
  }

  jQuery = (ViewportStatus) => {
    $(function () {
      if (ViewportStatus === "In Viewport") {
        window.history.pushState(
          {
            additionalInformation:
              "Partners section at PT. Burgeon Adaire International",
          },
          "Partners | PT. Burgeon Adaire International",
          "/partners"
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
        id="partners"
        className="burgeon-partners container-fluid"
      >
        <div className="row">
          <div className="col-lg-9 py-3">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="d-flex flex-row">
                <div>
                  <div className="vr bg-light h-25"></div>
                </div>
                <div className="margin-twentyfour-rl partner-margin-text-mobile">
                  <h2 className="text-light pepperstone-header-mobile">
                    Partnering with Pepperstone
                  </h2>
                  <p className="lead text-light pepperstone-text-mobile">
                    In partnership with Pepperstone, we strategically build our
                    forex and crypto portfolio through the trading of
                    commodities, currencies, cryptocurrencies, and indices,
                    enhancing our financial strength and growth.
                  </p>
                </div>
              </div>
              <div className="pepperstone-misc-mobile d-flex flex-row justify-content-between align-items-end py-3">
                <img
                  style={{ objectFit: "cover" }}
                  alt="Pepperstone Official Partner"
                  src="https://images.burgeonadaire.com/new_bai_img/pepperstone_bai_new.png"
                  height={80}
                ></img>
                <div className="d-flex flex-row pepperstone-buttons-mobile">
                  <a
                    href="https://trk.pepperstonepartners.com/aff_c?offer_id=367&aff_id=34824"
                    className="btn btn-dark btn-pepperstone btn-pepperstone-join-mobile me-3"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="fw-medium">Join Pepperstone Now</span>
                  </a>
                  <div className="dropdown dropdown-pepperstone-mobile">
                    <a
                      role="button"
                      className="btn btn-pepperstone"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span>
                        <span className="text-white fw-medium">
                          For Investors
                        </span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ms-2 link-white"
                          size="sm"
                        />
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-pepperstone">
                      <li>
                        <a
                          target="_blank"
                          rel="noopener"
                          className="dropdown-item dropdown-item-pepperstone text-white"
                          href="https://ct.spotware.com/copy/strategy/94521"
                        >
                          Invite Link
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener"
                          className="dropdown-item dropdown-item-pepperstone text-white"
                          href="https://ct.spotware.com/investor/VRSveDvsgMU"
                        >
                          Investor Access Link
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 py-3 partner-right-container">
            <div className="h-100 partner-right-box rounded d-flex justify-content-end p-4 position-relative">
              <div>
                <a
                  href="https://www.tradingview.com/?aff_id=139776&aff_sub=geraldzandisko&source=burgeonadaire"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    alt="TradingView Partner"
                    src="https://images.burgeonadaire.com/tradingview-logo.webp"
                    width={160}
                  ></img>
                </a>
              </div>
              <div className="background-partner-overlay rounded"></div>
            </div>
          </div>
          <div className="associates-box-mobile col-md-12 py-3 d-flex flex-column justify-content-evenly">
            <div className="associates-text-mobile">
              <h2 className="text-light text-center">Our Associates</h2>
              <p className="text-light lead text-center mb-0">
                Our dedication to excellence reaches beyond our team. In the
                finance and tech industries, collaboration is essential, and our
                partnerships deepen our expertise, expand our services, and
                drive shared growth.
              </p>
            </div>
          </div>
          <div className="col-md-12 py-3">
            <div className="partners-marquee-box d-flex flex-column justify-content-center">
              <Marquee
                direction="left"
                gradient="true"
                gradientColor="#000707"
                gradientWidth={50}
              >
                {this.state.associates.map((element, i) => (
                  <a key={i} href={element.link} target="_blank" rel="noopener">
                    <div className="partners-small-box p-4 rounded ms-5 me-5">
                      <img
                        src={element.logo}
                        height={56}
                        alt={element.desc}
                        className="partners-opacity"
                      ></img>
                    </div>
                  </a>
                ))}
              </Marquee>
            </div>
          </div>
          <div className="col-lg-12 d-flex flex-column py-3">
            <h3 className="text-light text-center">Technology Stacks</h3>
            <p className="tech-stacks-mobile-text text-light mb-0 text-center lead">
              We are proud to have relied on{" "}
              <span className="fw-medium">
                <a
                  href="https://aws.amazon.com"
                  className="text-decoration-none text-white"
                  target="_blank"
                  rel="noopener"
                >
                  Amazon Web Services
                </a>
              </span>{" "}
              and other technology stacks over the years, ensuring that we
              consistently deliver high-quality services for both our team and
              our clients.
            </p>
          </div>
          <div className="col-lg-12 py-3">
            <div className="partners-marquee-box d-flex flex-column justify-content-center">
              <Marquee
                direction="left"
                gradient="true"
                gradientColor="#000707"
                gradientWidth={50}
              >
                {this.state.stacks.map((element, i) => (
                  <a key={i} href={element.link} target="_blank" rel="noopener">
                    <div className="partners-small-box p-4 rounded ms-5 me-5">
                      <img
                        src={element.logo}
                        height={56}
                        alt={element.desc}
                        className="partners-opacity"
                      ></img>
                    </div>
                  </a>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const PartnersSections = handleViewport(BurgeonPartners, {
  rootMargin: "-1.0px",
});

export default PartnersSections;
