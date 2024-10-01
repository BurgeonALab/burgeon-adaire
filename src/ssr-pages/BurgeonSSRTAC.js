import React, {
  Component,
  Fragment,
} from 'react';
import { BurgeonSEO } from '../ssr-components/BurgeonSSRSEO';
import {
  BurgeonSSRContacts,
  BurgeonSSRNavbar,
} from '../ssr-components';
import {
  BurgeonSSRSubTAC,
} from '../ssr-pages/ssr-sub-pages';

export default class BurgeonSSRTAC extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Terms and Conditions | PT. Burgeon Adaire International"
          description="PT. Burgeon Adaire International thrives in a dynamic landscape, offering insights and opportunities while building strong partnerships and consistently delivering exceptional value."
        />
        <div className='bottom-footer-container'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonSSRContacts />
                <BurgeonSSRNavbar />
                <BurgeonSSRSubTAC />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}