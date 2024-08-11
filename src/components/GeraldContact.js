import React, { Component } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

export default class GeraldContact extends Component {
  render() {
    return (
      <div className='contact-container'>
        <div className='contact-box me-5 shadow'>
          <div className='p-3'>
            <div className='d-flex flex-row'>
              <p className='mb-0 me-1 fw-medium'>Gerald Zandisko</p>
              <MaterialSymbol className='ms-1' icon="keyboard_arrow_up" size={24} fill grade={-25} color='#000000' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
