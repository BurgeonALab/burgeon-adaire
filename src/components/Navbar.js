import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import {
  BAILogo,
} from './images';
import $ from 'jquery';

export default class Navbar extends Component {
  jQuery = () => {
    $(function () {
      $(window).on("scroll", function () {
        if ($(document).scrollTop() > 24) {
          console.log('24 Reached');
        } else {
          console.log('Reseted');
        }
      });
    });
  }

  componentDidMount() {
    this.jQuery()
  }

  render() {
    return (
      <nav className="navbar-position w-100 mt-4">
        <div className="bai-navbar p-3 rounded-pill">
          <div className="d-flex flex-row">
            <div className="mx-3 d-flex w-50">
              <a className="navbar-brand" href="https://burgeonadaire.com">
                <img alt="PT. Burgeon Adaire International Logo" src={BAILogo} height="40"></img>
              </a>
              <span className='burgeon-nav-title ms-3 d-flex align-items-center'><strong>Burgeon Adaire International</strong></span>
            </div>
            <div className='w-50 d-flex flex-row-reverse'>
              <div className='burgeon-nav-mobile-button'>
                <button type='button' data-bs-toggle='offcanvas' data-bs-target='#burgeonNavbarMobile' aria-controls='burgeonNavbarMobile' className='btn btn-link d-flex align-items-center justify-content-center text-decoration-none'>
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
                    <a>Identity</a>
                  </li>
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a>Operations</a>
                  </li>
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a>Gratitude</a>
                  </li>
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a className='nav-link dropdown-toggle p-0 link-dark' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                      Legal
                    </a>
                    <ul className='dropdown-menu dropdown-menu-end'>
                      <li><a className='dropdown-item' href='#'>Privacy Policy</a></li>
                      <li><a className='dropdown-item' href='#'>Cookie Policy</a></li>
                      <li><a className='dropdown-item' href='#'>Terms & Conditions</a></li>
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
