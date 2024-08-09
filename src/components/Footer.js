import React, { Component } from 'react';
import {
  BurgeonAdairePepperstone
} from './images';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer text-white">
        <div>
          <div className="container-fluid py-5">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-start align-items-center">
                <img alt="Pepperstone Official Partner" src={BurgeonAdairePepperstone} height="96"></img>
              </div>
              <div className="col-md-6 d-flex justify-content-end align-items-center">
                <img src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" height={64} alt="Powered by AWS Cloud Computing"></img>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center">© 2024 <strong>PT. Burgeon Adaire International</strong>. All rights reserved</p>
      </div>
    );
  }
}
