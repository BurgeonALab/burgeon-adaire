import React, {
  Component,
  Fragment,
  Suspense,
  lazy,
} from 'react';

const BSmallExtras = lazy(() => import('../small/BSmallExtras'));

export default class BMediumExtras extends Component {
  render() {
    return (
      <Fragment>
        <div className='extras-container d-flex flex-row flex-grow-1'>
          <div className='flex-grow-1 operation-child-container'>
            <div className='h-100 padding-twelve-r'>
              <div className='ecommerce-box rounded p-4'>
                <div className='d-flex h-100 flex-column'>
                  <div>
                    <h5 className='text-light'>eCommerce</h5>
                    <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-grow-1 operation-child-container'>
            <div className='h-100 padding-twelve-l'>
              <div className='investment-box rounded p-4'>
                <div className='d-flex h-100 flex-column'>
                  <div>
                    <h5 className='text-light'>Investment</h5>
                    <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<p className='d-none'>Loading...</p>}>
          <BSmallExtras />
        </Suspense>
      </Fragment>
    );
  }
}