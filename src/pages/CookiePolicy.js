import React, {
  Component,
  Fragment,
} from 'react';
import {
  BurgeonHead,
  BurgeonNavbar,
  BurgeonFooter,
  BurgeonContact,
  BurgeonCookiePolicy,
} from '../components';
import { BurgeonSEO } from '../components/BurgeonSEO';

export default class CookiePolicy extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Cookie Policy | PT. Burgeon Adaire International"
          description="Cookie Policy."
          sitename="PT. Burgeon Adaire International"
          canoncial="https://burgeonadaire.com/cookie-policy"
        />
        <div className='bottom-footer-container'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonHead />
                <BurgeonContact />
                <BurgeonNavbar />
                <BurgeonCookiePolicy />
              </div>
            </div>
          </div>
          <BurgeonFooter />
        </div>
      </Fragment>
    );
  }
}