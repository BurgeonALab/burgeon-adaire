import React, { Component } from 'react';
import {
  BurgeonAdairePepperstone
} from './images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  TheOrg,
  GeraldZandisko,
} from './vectors';
import { ReactSVG } from 'react-svg';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer text-white">
        <div>
          <div className="container-fluid py-5">
            <div className="row">
              <div className="burgeon-partner-major col-lg-6 d-flex justify-content-start align-items-center">
                <img className='partner-pepperstone' alt="Pepperstone Official Partner" src={BurgeonAdairePepperstone} height={80}></img>
              </div>
              <div className="burgeon-partner-major col-lg-6 d-flex justify-content-end align-items-center">
                <img className='partner-aws' src="https://d0.awsstatic.com/logos/powered-by-aws-white.png" height={56} alt="Powered by AWS Cloud Computing"></img>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center">© 2024 <strong>PT. Burgeon Adaire International</strong>. All rights reserved</p>
        <div className='mb-3 d-flex flex-row justify-content-center'>
          <div className='mx-2 d-flex justify-content-center align-items-center'>
            <a className='d-block' href='https://www.instagram.com/burgeonadaire/' target='_blank'>
              <FontAwesomeIcon icon={faInstagram} className='link-light' size='lg' />
            </a>
          </div>
          <div className='mx-2 d-flex justify-content-center align-items-center'>
            <a className='d-block' href='https://theorg.com/org/pt-burgeon-adaire-international' target='_blank'>
              <ReactSVG title='The Org' desc='PT. Burgeon Adaire International Organizational' src={TheOrg} />
            </a>
          </div>
          <div className='mx-2 d-flex justify-content-center align-items-center'>
            <a className='d-block' href='https://www.linkedin.com/company/burgeonadaire/' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} className='link-light' size='lg' />
            </a>
          </div>
          {/* <div className='mx-2 d-flex justify-content-center align-items-center'>
            <a className='d-block' href='https://geraldzandisko.burgeonadaire.com' target='_blank'>
              <ReactSVG title='Gerald Zandisko' desc='My artwork portfolio' src={GeraldZandisko} />
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}
