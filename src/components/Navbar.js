import React, { Component } from 'react';
import { BAILogo } from './images';
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
      <div>
        <nav>
          <div className="container p-3 shadow rounded-pill">
            <div className="d-flex flex-row">
              <div className="mx-3 d-flex w-50">
                <a className="navbar-brand" href="#">
                  <img alt="PT. Burgeon Adaire International Logo" src={BAILogo} height="40"></img>
                </a>
                <span className='ms-3 d-flex align-items-center'><strong>Burgeon Adaire International</strong></span>
              </div>
              <div className='w-50 d-flex flex-row-reverse'>
                <ul className="nav d-flex flex-row-reverse me-3">
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a>Section #1</a>
                  </li>
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a>Section #2</a>
                  </li>
                  <li className="nav-item ms-3 d-flex align-items-center">
                    <a>Section #3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
