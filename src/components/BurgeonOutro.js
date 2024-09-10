import React, { Component } from 'react';
import {
  TigerOx,
} from './images';

export default class BurgeonOutro extends Component {
  render() {
    return (
      <div className='outro-container container-fluid py-3 d-flex position-relative'>
        <div className='outro-credit-mobile position-absolute h-100 top-0 d-flex align-items-end py-3'>
          <p className='lead text-light fw-medium mb-0'>Photo credit</p>
        </div>
        <div className='outro-mobile col-md-12 d-flex align-items-end justify-content-end flex-column'>
          <img src={TigerOx} height={448} className='tiger-ox' alt="A tiger and an ox fighting outside a cave in the mountains"></img>
          <p className='outro-text-mobile h4 mt-4 mb-0 text-end'>
            <a className='link-light text-decoration-none' href='https://wellcomecollection.org/works/w9kd2eed/images?id=uf2897g8' target='_blank' rel='noopener'>
              <span className='fw-light'>A tiger and an ox fighting outside a cave in the mountains</span>
              <small className='text-light-50 ms-2'>Etching by JE Ridinger</small>
            </a>
          </p>
        </div>
      </div>
    );
  }
}
