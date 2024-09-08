import React, { Component } from 'react';
import {
  BurgeonHead,
  BurgeonNavbar,
  BurgeonFooter,
  BurgeonJumbotron,
  BurgeonAbout,
  BurgeonContact,
  BurgeonAbstract,
  BurgeonOperations,
  BurgeonOutro,
  BurgeonPartners,
} from '../components';

export default class HomePage extends Component {
  render() {
    return (
      <div className="bottom-footer-container container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <BurgeonHead />
            <BurgeonContact />
            <BurgeonNavbar />
            <BurgeonJumbotron />
            <div className='padding-twelve-rl'>
              <BurgeonAbout />
              <BurgeonAbstract />
              <BurgeonOperations />
              <BurgeonOutro />
              <BurgeonPartners />
            </div>
          </div>
        </div>
        <BurgeonFooter />
      </div>
    );
  }
}