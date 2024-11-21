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
          desc: 'We actively manage a diverse portfolio, carefully selecting companies with strong growth prospects alongside strategic investments in commodities, cryptocurrencies, and currencies.',
          link: 'https://portfolio.burgeonadaire.com',
        },
        {
          id: 1,
          name: 'Blog',
          desc: 'Get a glimpse of our thinking on finance, technology, and investment strategies, plus a few random musings along the way.',
          link: 'https://blog.burgeonadaire.com',
        },
        {
          id: 2,
          name: 'The Adaire Solutions',
          desc: 'Our sister company which operates in Information Technology. We believe cloud computing will become a key driver for business innovation.',
          link: 'https://adairesolutions.com',
        },
        {
          id: 3,
          name: 'eCommerce',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: 'https://shop.burgeonadaire.com',
        },
        {
          id: 4,
          name: 'Organizations',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: 'https://org.burgeonadaire.com',
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
                <div className='d-flex h-100 flex-column justify-content-between align-items-start'>
                  <div>
                    <a className='text-decoration-none' href={data.link} rel="noopener" target="_blank">
                      <h5 className='text-light'>{data.name}</h5>
                    </a>
                    <p className='text-light'>{data.desc}</p>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <span className="badge text-bg-danger">WIP</span>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}