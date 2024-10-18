import React, {
  Component,
  Fragment
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import $ from 'jquery';
import { ReactSVG } from 'react-svg';

export default class BurgeonSSRFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialsymbol: [
        {
          id: 0,
          type: 'symbol',
          desc: "PT. Burgeon Adaire International's Instagram Profile Page",
          link: "https://www.instagram.com/burgeonadaire",
          icon: faInstagram,
        },
        {
          id: 1,
          type: 'symbol',
          desc: "PT. Burgeon Adaire International's LinkedIn Profile Page",
          link: "https://linkedin.com/company/burgeonadaire",
          icon: faLinkedin,
        },
        {
          id: 2,
          type: 'symbol',
          desc: "PT. Burgeon Adaire International's Twitter X Profile Page",
          link: "https://twitter.com/burgeonadaire",
          icon: faXTwitter,
        },
        {
          id: 3,
          type: 'svg',
          desc: "PT. Burgeon Adaire International's The Org Profile Page",
          link: "https://bit.ly/3SWvfNS",
          src: "./assets/the-org.svg",
          height: 'auto',
          width: '28px',
          classname: 'social-media-footer-items-org social-media-footer-mobile-links mt-3 d-flex justify-content-center align-items-center',
        },
        {
          id: 4,
          type: 'svg',
          desc: "PT. Burgeon Adaire International's PitchBook Profile Page",
          link: "https://pitchbook.com",
          height: '28px',
          src: "./assets/pitchbook.svg",
          width: 'auto',
          classname: 'social-media-footer-items-pitchbook social-media-footer-mobile-links mt-3 d-flex justify-content-center align-items-center',
        },
      ],
    }
  }

  jQuery = () => {
    $('.social-media-footer-items-org').on('mouseenter', function () {
      $('.burgeon-adaire-link-svg-inside>path').attr('style', 'fill: #8B0000 !important;')
    });
    $('.social-media-footer-items-org').on('mouseleave', function () {
      $('.burgeon-adaire-link-svg-inside>path').attr('style', 'fill: #FFFFFF !important;')
    });

    $('.social-media-footer-items-pitchbook').on('mouseenter', function () {
      $('.burgeon-adaire-link-svg-inside > g > g > path').attr('style', 'fill: #8B0000 !important;')
    });
    $('.social-media-footer-items-pitchbook').on('mouseleave', function () {
      $('.burgeon-adaire-link-svg-inside > g > g > path').attr('style', 'fill: #FFFFFF !important;')
    });
  };

  componentDidMount() {
    this.jQuery();
  }

  render() {
    return (
      <Fragment>
        <div className="footer text-light">
          <hr className='footer-hr' />
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-7 p-0'>
                    <div className='footer-image-container d-flex align-items-start pt-4 ps-4'>
                      <p className='lead text-light fw-medium mb-0'>Photo credit</p>
                    </div>
                  </div>
                  <div className='col-md-5 p-4'>
                    <div className='row'>
                      <div className='col-md-6 d-flex flex-column justify-content-end'>
                        <div className='mt-3'>
                          <p className='lead fw-medium mb-0'>Portfolio</p>
                          <div className='link-blank-space footer-link-right-mobile'>
                            <a className='text-decoration-none link-light' href="https://geraldzandisko.burgeonadaire.com" target='_blank' rel='noopener'>
                              <p className='burgeon-adaire-link footer-item-link-mobile mb-0 mt-3 fw-light'>Gerald Zandisko</p>
                            </a>
                            <a className='text-decoration-none link-light' href="https://www.myfxbook.com/members/gerraour" target='_blank' rel='noopener'>
                              <p className='burgeon-adaire-link footer-item-link-mobile mb-0 mt-3 fw-light'>Myfxbook</p>
                            </a>
                          </div>
                        </div>
                        <div className='footer-link-box-mobile mt-3'>
                          <p className='lead fw-medium mb-0'>Companies</p>
                          <div className='link-blank-space footer-link-right-mobile'>
                            <a className='burgeon-adaire-link text-decoration-none link-light' href="https://adairesolutions.com" target='_blank' rel='noopener'>
                              <p className='footer-item-link-mobile mb-0 mt-3 fw-light'>The Adaire Solutions</p>
                            </a>
                            <a className='burgeon-adaire-link text-decoration-none link-light' href="#" target='_blank' rel='noopener'>
                              <p className='footer-item-link-mobile mb-0 mt-3 fw-light'>eCommerce</p>
                            </a>
                          </div>
                        </div>
                        <div className='footer-link-box-mobile mt-3'>
                          <p className='lead fw-medium mb-0'>Links</p>
                          <div className='link-blank-space footer-link-right-mobile'>
                            <a className='burgeon-adaire-link text-decoration-none link-light' href="#" target='_blank' rel='noopener'>
                              <p className='footer-item-link-mobile mb-0 mt-3 fw-light'>Identity</p>
                            </a>
                            <a className='burgeon-adaire-link text-decoration-none link-light' href="#" target='_blank' rel='noopener'>
                              <p className='footer-item-link-mobile mb-0 mt-3 fw-light'>Operations</p>
                            </a>
                            <a className='burgeon-adaire-link text-decoration-none link-light' href="#" target='_blank' rel='noopener'>
                              <p className='footer-item-link-mobile mb-0 mt-3 fw-light'>Gratitude</p>
                            </a>
                            <a className='burgeon-adaire-link text-decoration-none link-light' href="#" target='_blank' rel='noopener'>
                              <p className='footer-item-link-mobile mb-0 mt-3 fw-light'>Privacy Policy</p>
                            </a>
                            <a className='burgeon-adaire-link text-decoration-none link-light' href="#" target='_blank' rel='noopener'>
                              <p className='footer-item-link-mobile mb-0 mt-3 fw-light'>Cookie Policy</p>
                            </a>
                            <a className='burgeon-adaire-link text-decoration-none link-light' href="#" target='_blank' rel='noopener'>
                              <p className='footer-item-link-mobile mb-0 mt-3 fw-light'>Terms & Conditions</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='social-media-footer-mobile col-md-6 d-flex flex-column justify-content-end'>
                        <div className='social-media-footer-mobile-items mb-0 d-flex flex-column align-items-end'>
                          {
                            this.state.socialsymbol.map((element, i) => (
                              element.type === "symbol" ?
                                <div key={i} className='social-media-footer-mobile-links mt-3 d-flex justify-content-center align-items-center'>
                                  <a className='d-block' href={element.link} target='_blank' rel='noopener'>
                                    <FontAwesomeIcon icon={element.icon} className='burgeon-adaire-link link-light' size='2xl' />
                                  </a>
                                </div>
                                :
                                <div key={i} className={element.classname}>
                                  <a className='d-block' href={element.link} target='_blank' rel='noopener'>
                                    <ReactSVG
                                      beforeInjection={(svg) => {
                                        svg.classList.add('burgeon-adaire-link-svg-inside');
                                        svg.setAttribute('style', 'height: ' + element.height + '; width: ' + element.width + ';');
                                      }}
                                      desc={element.desc}
                                      src={element.src}
                                    />
                                  </a>
                                </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    <p className='mb-0 mt-5 footer-text-mobile'>© 2024 <strong>PT. Burgeon Adaire International</strong>. All rights reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}