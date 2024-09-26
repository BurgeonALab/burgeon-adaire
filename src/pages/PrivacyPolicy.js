import React, {
  Component,
  Fragment,
} from 'react';
import {
  BurgeonHead,
  BurgeonNavbar,
  BurgeonFooter,
  BurgeonContact,
  BurgeonPrivacyPolicy,
} from '../components';
import { BurgeonSEO } from '../components/BurgeonSEO';

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Privacy Policy | PT. Burgeon Adaire International"
          description="Privacy Policy."
          sitename="PT. Burgeon Adaire International"
          canoncial="https://burgeonadaire.com/privacy-policy"
        />
        <div className='bottom-footer-container'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonHead />
                <BurgeonContact />
                <BurgeonNavbar />
                <BurgeonPrivacyPolicy />
              </div>
            </div>
          </div>
          <BurgeonFooter />
        </div>
      </Fragment>
    );
  }
}