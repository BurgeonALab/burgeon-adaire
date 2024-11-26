import React, {
  Component,
  Fragment,
  Suspense,
  lazy,
} from 'react';
import {
  BurgeonNavbar,
  BurgeonFooter,
  BurgeonJumbotron,
  BurgeonContact,
} from '../components';
import { BurgeonSEO } from '../components/BurgeonSEO';

const BurgeonAbout = lazy(() => import('../components/BurgeonAbout'));
const BurgeonAbstract = lazy(() => import('../components/BurgeonAbstract'));
const BurgeonOperations = lazy(() => import('../components/BurgeonOperations'));
const BurgeonOutro = lazy(() => import('../components/BurgeonOutro'));
const BurgeonPartners = lazy(() => import('../components/BurgeonPartners'));

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <BurgeonSEO
          title="Driving the Future | PT. Burgeon Adaire International"
          description="PT. Burgeon Adaire International thrives in a dynamic landscape, offering insights and opportunities while building strong partnerships and consistently delivering exceptional value."
          canonical="https://burgeonadaire.com"
        />
        <div className='bottom-footer-container'>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BurgeonContact />
                <BurgeonNavbar />
                <BurgeonJumbotron />
                <Suspense fallback={<p className='d-none'>Loading</p>}>
                  <BurgeonAbout />
                </Suspense>
                <Suspense fallback={<p className='d-none'>Loading</p>}>
                  <BurgeonAbstract />
                </Suspense>
                <Suspense fallback={<p className='d-none'>Loading</p>}>
                  <BurgeonOperations />
                </Suspense>
                <Suspense fallback={<p className='d-none'>Loading</p>}>
                  <BurgeonOutro />
                </Suspense>
                <Suspense fallback={<p className='d-none'>Loading</p>}>
                  <BurgeonPartners />
                </Suspense>
              </div>
            </div>
          </div>
          <BurgeonFooter />
        </div>
      </Fragment>
    );
  }
}