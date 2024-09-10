import React, { Component } from 'react';
import {
  TigerOx,
} from './images';

export default class BurgeonOutro extends Component {
  render() {
    return (
      <div className='outro-container container-fluid py-3 d-flex position-relative'>
        <div className='outro-header-mobile pointer-events-none position-absolute w-100 h-100 pe-4'>
          <h2 className='text-light'>Gratitude</h2>
          <p className='lead text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='outro-credit-mobile position-absolute h-100 top-0 d-flex align-items-end py-3'>
          <p className='lead text-light fw-medium mb-0'>Photo credit</p>
        </div>
        <div className='outro-events outro-mobile col-md-12 d-flex align-items-end justify-content-end flex-column'>
          <img src={TigerOx} height={448} className='tiger-ox' alt="A tiger and an ox fighting outside a cave in the mountains"></img>
          <p className='outro-text-mobile h4 mt-4 mb-0 text-end'>
            <a className='outro-link-mobile link-light text-decoration-none' href='https://wellcomecollection.org/works/w9kd2eed/images?id=uf2897g8' target='_blank' rel='noopener'>
              <span className='fw-light'>A tiger and an ox fighting outside a cave in the mountains</span>
              <small className='text-light-50 ms-2'>Etching by JE Ridinger</small>
            </a>
          </p>
        </div>
      </div>
    );
  }
}
