import React, {
  Component,
  Fragment,
} from 'react';
import {
  BurgeonNavbar,
  BurgeonFooter,
  BurgeonContact,
} from '../components';
import {
  BurgeonSubTermsConditions,
} from './sub-pages';
import { BurgeonSEO } from '../components/BurgeonSEO';

export default class TermsConditions extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Terms and Condition | PT. Burgeon Adaire International"
          description="Terms and Condition."
        />
        <div className='bottom-footer-container'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonContact />
                <BurgeonNavbar />
                <BurgeonSubTermsConditions />
              </div>
            </div>
          </div>
          <BurgeonFooter />
        </div>
      </Fragment>
    );
  }
}