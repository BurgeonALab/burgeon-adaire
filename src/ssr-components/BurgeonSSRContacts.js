import React, {
  Component,
  Fragment,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

export default class BurgeonSSRContacts extends Component {
  render() {
    return (
      <Fragment>
        <div className='contact-mobile contact-container'>
          <div className='contact-box ms-5 shadow'>
            <div className='p-3'>
              <div className='d-flex flex-row align-items-center'>
                <a role='button' className='link-light text-decoration-none'>
                  <p className='d-flex align-items-center mb-0 fw-medium'>
                    Make a Call
                    <FontAwesomeIcon icon={faChevronUp} className='ms-3' size='sm' />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}