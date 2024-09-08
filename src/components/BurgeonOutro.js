import React, { Component } from 'react';
import {
  TigerOx,
} from './images';

export default class BurgeonOutro extends Component {
  render() {
    return (
      <div className='outro-container container-fluid py-3 d-flex justify-content-center align-items-center'>
        <div className='row'>
          <div className='col-md-12 d-flex align-items-center flex-column'>
            <img src={TigerOx} height={448} className='tiger-ox' alt="A tiger and an ox fighting outside a cave in the mountains"></img>
            <p className='h4 mt-5 text-center mb-0'>
              <a className='link-light text-decoration-none' href='https://wellcomecollection.org/works/w9kd2eed/images?id=uf2897g8' target='_blank' rel='noopener'>
                <span className='fw-light'>A tiger and an ox fighting outside a cave in the mountains</span>
                <small className='text-light-50 ms-2'>Etching by JE Ridinger</small>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
