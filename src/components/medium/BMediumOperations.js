import React, { Component } from 'react';
import Slider from "react-slick";

const settings = {
  infinite: false,
  slidesToShow: 1,
  speed: 500,
  fade: true,
  dots: true,
  dotsClass: "operations-dots",
  customPaging: function () {
    return (
      <a>
        <div className="operations-circle-indicator"></div>
      </a>
    );
  },
};

export default class BMediumOperations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          name: 'Portfolio',
          link: 'https://portfolio.burgeonadaire.com',
        },
        {
          id: 0,
          name: 'Blog',
          link: 'https://blog.burgeonadaire.com',
        },
        {
          id: 0,
          name: 'The Adaire Solutions',
          link: 'https://adairesolutions.com',
        }
      ],
    };
  }

  render() {
    return (
      <div className='burgeon-mobile-first-operations col-md-12'>
        <Slider {...settings}>
          {
            this.state.items.map((data, index) => (
              <div key={index} className='portfolio-box rounded p-4 h-100'>
                <div className='d-flex h-100 flex-column'>
                  <a className='text-decoration-none' href={data.link} rel="noopener" target="_blank">
                    <h5 className='text-light'>{data.name}</h5>
                  </a>
                  <p className='text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}