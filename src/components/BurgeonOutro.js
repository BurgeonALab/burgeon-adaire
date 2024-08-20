import React, { Component } from 'react';
import {
  TigerOx,
} from './images';

export default class BurgeonOutro extends Component {
	render() {
		return (
			<div className='outro-container container-fluid py-5 d-flex justify-content-center align-items-center'>
        <img src={TigerOx} height={448} className='tiger-ox' alt="A tiger and an ox fighting outside a cave in the mountains"></img>
        <div className='outro-text-container text-white position-absolute'>
          <div className='outro-text d-flex justify-content-end align-items-end p-3'>
            <p className='outro-text-title h4 me-5'>
              <a className='link-light text-decoration-none' href='https://wellcomecollection.org/works/w9kd2eed/images?id=uf2897g8' target='_blank' rel='noopener'> 
                <span className='outro-text-title-first me-2 fw-light'>A tiger and an ox fighting outside a cave in the mountains</span>
              </a>
              <small className='text-white-50 ms-2'>Etching by JE Ridinger</small>
            </p>
          </div>
        </div>
			</div>
		);
	}
}
