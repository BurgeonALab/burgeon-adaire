import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  TheOrg,
  PitchBook,
} from './vectors';
import { ReactSVG } from 'react-svg';

export default class BurgeonFooter extends Component {
  render() {
    return (
      <div className="footer text-light">
        <div className='container-fluid py-3'>
          <div className='row'>
            <div className='col-md-12'>
              <p className="text-center">© 2024 <strong>PT. Burgeon Adaire International</strong>. All rights reserved</p>
              <div className='mb-3 d-flex flex-row justify-content-center'>
                <div className='mx-2 d-flex justify-content-center align-items-center'>
                  <a className='d-block' href='https://www.instagram.com/burgeonadaire' target='_blank' rel='noopener'>
                    <FontAwesomeIcon icon={faInstagram} className='link-light' size='lg' />
                  </a>
                </div>
                <div className='mx-2 d-flex justify-content-center align-items-center'>
                  <a className='d-block' href='https://theorg.com/org/pt-burgeon-adaire-international' target='_blank' rel='noopener'>
                    <ReactSVG title='The Org' desc='PT. Burgeon Adaire International Organizational' src={TheOrg} />
                  </a>
                </div>
                <div className='mx-2 d-flex justify-content-center align-items-center'>
                  <a className='d-block' href='https://linkedin.com/company/burgeonadaire' target='_blank' rel='noopener'>
                    <FontAwesomeIcon icon={faLinkedin} className='link-light' size='lg' />
                  </a>
                </div>
                <div className='mx-2 d-flex justify-content-center align-items-center'>
                  <a className='d-block' href='https://twitter.com/burgeonadaire' target='_blank' rel='noopener'>
                    <FontAwesomeIcon icon={faXTwitter} className='link-light' size='lg' />
                  </a>
                </div>
                <div className='mx-2 d-flex justify-content-center align-items-center'>
                  <a className='d-block' href='https://pitchbook.com' target='_blank' rel='noopener'>
                    <ReactSVG title='PitchBook' desc='PitchBook Profile' src={PitchBook} />
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
