import React, {
  Component,
  Fragment,
} from 'react';

export default class BSmallExtras extends Component {
  render() {
    return (
      <Fragment>
        <div className='extras-container-mobile d-flex flex-row flex-grow-1'>
          <div className='flex-grow-1 operation-child-container'>
            <div className='h-100'>
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
        </div>
      </Fragment>
    );
  }
}