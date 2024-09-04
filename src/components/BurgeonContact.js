import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

export default class BurgeonContact extends Component {
  render() {
    return (
      <div className='contact-mobile contact-container'>
        <div className='contact-box me-5 shadow'>
          <div className='p-3'>
            <div className='d-flex flex-row align-items-center'>
              <p className='mb-0 me-1 fw-medium'>Make a Call</p>
              <FontAwesomeIcon icon={faChevronUp} className='ms-1 d-flex link-dark' size='sm' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
