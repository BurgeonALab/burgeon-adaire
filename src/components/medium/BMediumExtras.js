import React, {
  Component,
  Fragment,
} from 'react';

export default class BMediumExtras extends Component {
  render() {
    return (
      <Fragment>
        <div className='extras-container d-flex flex-row flex-grow-1'>
          <div className='operation-child-container w-50'>
            <div className='h-100 padding-twelve-r'>
              <div className='ecommerce-box rounded p-4'>
                <div className='d-flex h-100 flex-column justify-content-between'>
                  <div>
                    <a className='text-decoration-none' href="https://shop.burgeonadaire.com" rel="noopener" target="_blank">
                      <h5 className='text-light'>eCommerce</h5>
                    </a>
                    <p className='text-light mb-0'>Show your support and explore our diverse collection of merchandise in our online store, featuring a wide range of items you will love.</p>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <span className="badge text-bg-danger">WIP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='operation-child-container w-50'>
            <div className='h-100 padding-twelve-l'>
              <div className='investment-box rounded p-4'>
                <div className='d-flex h-100 flex-column justify-content-between'>
                  <div>
                    <a className='text-decoration-none' href="https://org.burgeonadaire.com" rel="noopener" target="_blank">
                      <h5 className='text-light'>Organizations</h5>
                    </a>
                    <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <span className="badge text-bg-danger">WIP</span>
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