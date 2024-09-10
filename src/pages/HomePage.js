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
          <div className="col-md-12">
            <BurgeonHead />
            <BurgeonContact />
            <BurgeonNavbar />
            <BurgeonJumbotron />
            <BurgeonAbout />
            <BurgeonAbstract />
            <BurgeonOperations />
          </div>
          <div className="col-md-12 px-0">
            <BurgeonOutro />
          </div>
          <div className="col-md-12">
            <BurgeonPartners />
          </div>
        </div>
        <BurgeonFooter />
      </div >
    );
  }
}