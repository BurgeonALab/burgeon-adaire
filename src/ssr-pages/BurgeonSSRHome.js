import React, {
  Component,
} from 'react';
import {
  Helmet,
  HelmetProvider,
} from 'react-helmet-async';
import {
  BurgeonSSRAbout,
  BurgeonSSRContacts,
  BurgeonSSRFooter,
  BurgeonSSRJumbotron,
  BurgeonSSRNavbar,
} from '../ssr-components';

const helmetContext = {};

export default class BurgeonSSRHome extends Component {
  render() {
    return (
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Driving the Future | PT. Burgeon Adaire International</title>
        </Helmet>
        <div className='bottom-footer-container'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonSSRContacts />
                <BurgeonSSRNavbar />
                <BurgeonSSRJumbotron />
                <BurgeonSSRAbout />
              </div>
            </div>
          </div>
          <BurgeonSSRFooter />
        </div>
      </HelmetProvider>
    );
  }
}