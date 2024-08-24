import React, { Component } from 'react';
import Marquee from "react-fast-marquee";
import {
  ValburyAsiaFutures,
} from './images';

export default class BurgeonOutro extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 p-3'>
            <h2 className='text-white fw-light text-center'>Associates</h2>
            <Marquee>
              <a href="https://valbury.co.id/sales/trading-valbury?fc=VMD1059F" target='_blank' rel='noopener'>
                <img src={ValburyAsiaFutures} height={56} alt="Valbury Asia Futures Wealth Management" className="partners-opacity my-5"></img>
              </a>
            </Marquee>
          </div>
        </div>
      </div>
    );
  }
}