import React, {
  Component,
  Fragment,
} from 'react';
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
import { BurgeonSEO } from '../components/BurgeonSEO';

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Home • PT. Burgeon Adaire International"
          description="PT. Burgeon Adaire International thrives in a dynamic landscape, offering insights and opportunities while building strong partnerships and consistently delivering exceptional value."
        />
        <div className='bottom-footer-container'>
          <div className="container-fluid">
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
              <div className='col-md-12 px-0'>
                <BurgeonOutro />
              </div>
              <div className="col-md-12">
                <BurgeonPartners />
              </div>
            </div>
          </div>
          <hr className='footer-hr' />
          <BurgeonFooter />
        </div>
      </Fragment>
    );
  }
}