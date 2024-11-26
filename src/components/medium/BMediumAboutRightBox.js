import React, {
  Component,
  Fragment,
} from 'react';

export default class BMediumAboutRightBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="about-box py-3 w-50 padding-twelve-rl">
          <div className="about-item about-item-brown rounded p-4">
            <div className='position-relative h-100'>
              <div className='about-rightbox-focus-mobile'>
                <div className='about-rightbox-focus p-4 rounded'>
                  <h3 className='text-light'>Martin Luther King, Jr.</h3>
                  <p className='text-light mb-0'>We must build dikes of courage to hold back the flood of fear.</p>
                </div>
              </div>
              <div className='justify-content-end position-absolute bottom-0'>
                <p className='about-credit-mobile text-light lead fw-medium mb-0'>Photo credit</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}