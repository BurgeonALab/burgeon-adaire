import React, { Component } from 'react';
import Slider from "react-slick";

const settings = {
  infinite: false,
  slidesToShow: 1,
  speed: 500,
  fade: true,
};

export default class BMediumOperations extends Component {
  render() {
    return (
      <div className='burgeon-mobile-first-operations col-md-12'>
        <Slider {...settings}>
          <div className='portfolio-box rounded p-4 h-100'>
            <div className='d-flex h-100 flex-column justify-content-between'>
              <h5 className='text-light'>Portfolio</h5>
              <div className='d-flex flex-column align-items-end'>
                <span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
              </div>
            </div>
          </div>
          <div className='portfolio-box rounded p-4 h-100'>
            <div className='d-flex h-100 flex-column justify-content-between'>
              <h5 className='text-light'>Blog</h5>
              <div className='d-flex flex-column align-items-end'>
                <span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
              </div>
            </div>
          </div>
          <div className='portfolio-box rounded p-4 h-100'>
            <div className='d-flex h-100 flex-column justify-content-between'>
              <h5 className='text-light'>The Adaire Solutions</h5>
              <div className='d-flex flex-column align-items-end'>
                <span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}