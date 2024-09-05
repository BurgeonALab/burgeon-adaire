import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import {
  Logo,
} from './images';
import $ from 'jquery';

export default class BurgeonNavbar extends Component {
  jQuery = () => {
    $(function () {
      $(window).on("scroll", function () {
        if ($(document).scrollTop() > 24) {
          $('#burgeon-navbar').css('margin-top', '0px');
          $('#burgeon-navbar').css('position', 'fixed');
          $('#burgeon-navbar .bai-navbar').css('margin-left', '0px');
          $('#burgeon-navbar .bai-navbar').css('margin-right', '0px');
          $('#burgeon-navbar .bai-navbar').css('border-radius', '0px');
        } else {
          $('#burgeon-navbar').css('margin-top', '1.5rem ');
          $('#burgeon-navbar .bai-navbar').css('margin-left', '24px');
          $('#burgeon-navbar .bai-navbar').css('margin-right', '24px');
          $('#burgeon-navbar').css('position', 'absolute');
          $('#burgeon-navbar .bai-navbar').css('border-radius', 'var(--bs-border-radius-pill)');
        }
      });
    });
  }

  componentDidMount() {
    this.jQuery()
  }

  render() {
    return (
      <nav id="burgeon-navbar" className="navbar-position w-100">
        <div className="bai-navbar p-3">
          <div className="d-flex flex-row">
            <div className="mx-3 d-flex w-50">
              <a className="navbar-brand" href="https://burgeonadaire.com">
                <img alt="PT. Burgeon Adaire International Logo" src={Logo} height="40"></img>
              </a>
              <span className='burgeon-nav-title ms-3 d-flex align-items-center text-light'><strong>Burgeon Adaire International</strong></span>
            </div>
            <div className='w-50 d-flex flex-row-reverse'>
              <div className='burgeon-nav-mobile-button d-flex align-items-center justify-content-center'>
                <button type='button' data-bs-toggle='offcanvas' data-bs-target='#burgeonNavbarMobile' aria-controls='burgeonNavbarMobile' className='btn btn-link'>
                  <FontAwesomeIcon icon={faBars} className='link-dark' size='lg' />
                </button>
                <div className='offcanvas offcanvas-end' data-bs-scroll='true' tabIndex={-1} id='burgeonNavbarMobile' aria-labelledby='burgeonNavbarMobileLabel'>
                  <div className='offcanvas-header d-flex justify-content-between flex-row'>
                    <h5 className='offcanvas-title' id='burgeonNavbarMobileLabel'>PT. Burgeon Adaire International</h5>
                    <button type='button' className='btn btn-link d-flex align-items-center justify-content-center text-decoration-none' data-bs-dismiss='offcanvas' aria-label='Close'>
                      <FontAwesomeIcon icon={faXmark} className='link-dark' size='lg' />
                    </button>
                  </div>
                  <div className='offcanvas-body'>
                  </div>
                </div>
              </div>
              <div className='burgeon-nav-menu'>
                <ul className="nav d-flex me-3">
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a className='text-light text-decoration-none'>Identity</a>
                  </li>
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a className='text-light text-decoration-none'>Operations</a>
                  </li>
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a className='text-light text-decoration-none'>Gratitude</a>
                  </li>
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a className='nav-link dropdown-toggle p-0 link-light' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                      Legal
                    </a>
                    <ul className='dropdown-menu dropdown-menu-end'>
                      <li>
                        <a className='dropdown-item link-light' href='#'>Privacy Policy</a>
                      </li>
                      <li>
                        <a className='dropdown-item link-light' href='#'>Cookie Policy</a>
                      </li>
                      <li>
                        <a className='dropdown-item link-light' href='#'>Terms & Conditions</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
