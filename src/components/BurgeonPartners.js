import React, { Component } from 'react';
import Marquee from "react-fast-marquee";
import {
  ValburyAsiaFutures,
  GeraldZandisko,
  AdaireSolutions,
} from './images';

export default class BurgeonOutro extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='gratitude-text-center'>
              <h2 className='text-white'>Gratitude</h2>
              <p className='lead text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className='col-md-6 py-3'>
            <h3 className='text-white fw-light text-center mb-0'>Associates</h3>
            <Marquee>
              <a href="https://valbury.co.id/sales/trading-valbury?fc=VMD1059F" target='_blank' rel='noopener'>
                <img src={ValburyAsiaFutures} height={56} alt="Valbury Asia Futures Wealth Management" className="partners-opacity valbury m-5"></img>
              </a>
              <a href="https://geraldzandisko.burgeonadaire.com" target='_blank' rel='noopener'>
                <img src={GeraldZandisko} height={56} alt="Gerald Zandisko's Homepage" className="partners-opacity m-5"></img>
              </a>
              <a href="#" target='_blank' rel='noopener'>
                <img src={AdaireSolutions} height={56} alt="Adaire Solutions" className="partners-opacity m-5"></img>
              </a>
            </Marquee>
          </div>
          <div className='col-md-6 py-3'>
            <h3 className='text-white fw-light text-center mb-0'>Partners</h3>
          </div>
        </div>
      </div>
    );
  }
}