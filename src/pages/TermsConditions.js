import React, {
  Component,
  Fragment,
} from 'react';
import {
  BurgeonHead,
  BurgeonNavbar,
  BurgeonFooter,
  BurgeonContact,
  BurgeonTermsConditions,
} from '../components';
import { BurgeonSEO } from '../components/BurgeonSEO';

export default class TermsConditions extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Terms and Condition | PT. Burgeon Adaire International"
          description="Terms and Condition."
          sitename="PT. Burgeon Adaire International"
          canoncial="https://burgeonadaire.com/terms-and-conditions"
        />
        <div className='bottom-footer-container'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonHead />
                <BurgeonContact />
                <BurgeonNavbar />
                <BurgeonTermsConditions />
              </div>
            </div>
          </div>
          <BurgeonFooter />
        </div>
      </Fragment>
    );
  }
}