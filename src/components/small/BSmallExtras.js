import React, {
  Component,
  Fragment,
} from 'react';

export default class BSmallExtras extends Component {
  render() {
    return (
      <Fragment>
        <div className='extras-container-mobile d-flex flex-row h-50'>
          <div className='flex-grow-1 operation-child-container'>
            <div className='h-100'>
              <div className='ecommerce-box rounded p-4'>
                <div className='d-flex h-100 flex-column justify-content-between'>
                  <h5 className='text-light'>eCommerce</h5>
                  <div className='d-flex flex-column align-items-end'>
                    <span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
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