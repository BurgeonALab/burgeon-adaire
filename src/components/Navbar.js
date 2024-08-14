import React, { Component } from 'react';
import {
  BAILogo,
} from './images';
// import $ from 'jquery';

export default class Navbar extends Component {
  // jQuery = () => {
  // Insert jQuery Code Here
  // }

  // componentDidMount() {
  //   this.jQuery()
  // }

  render() {
    return (
      <nav className="navbar-position w-100 mt-4">
        <div className="bai-navbar container p-3 rounded-pill">
          <div className="d-flex flex-row">
            <div className="mx-3 d-flex w-50">
              <a className="navbar-brand" href="#">
                <img alt="PT. Burgeon Adaire International Logo" src={BAILogo} height="40"></img>
              </a>
              <span className='ms-3 d-flex align-items-center'><strong>Burgeon Adaire International</strong></span>
            </div>
            <div className='w-50 d-flex flex-row-reverse'>
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
      </nav>
    );
  }
}
