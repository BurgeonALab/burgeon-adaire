import React, {
  Component,
  Fragment,
} from 'react';
import { BurgeonSEO } from '../ssr-components/BurgeonSSRSEO';
import {
  BurgeonSSRContacts,
  BurgeonSSRJumbotron,
  BurgeonSSRNavbar,
  BurgeonSSRFooter,
} from '../ssr-components';

export default class BurgeonSSRHome extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Driving the Future | PT. Burgeon Adaire International"
          description="PT. Burgeon Adaire International thrives in a dynamic landscape, offering insights and opportunities while building strong partnerships and consistently delivering exceptional value."
        />
        <div className='bottom-footer-container'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonSSRContacts />
                <BurgeonSSRNavbar />
                <BurgeonSSRJumbotron />
              </div>
            </div>
          </div>
          <BurgeonSSRFooter />
        </div>
      </Fragment>
    );
  }
}