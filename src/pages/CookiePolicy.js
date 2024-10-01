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
  BurgeonSubCookiePolicy,
} from './sub-pages';
import { BurgeonSEO } from '../components/BurgeonSEO';

export default class CookiePolicy extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Cookie Policy | PT. Burgeon Adaire International"
          description="Cookie Policy."
        />
        <div className='bottom-footer-container'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonContact />
                <BurgeonNavbar />
                <BurgeonSubCookiePolicy />
              </div>
            </div>
          </div>
          <BurgeonFooter />
        </div>
      </Fragment>
    );
  }
}