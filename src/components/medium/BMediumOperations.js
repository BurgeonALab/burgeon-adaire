import React, { Component } from "react";
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
          name: "Portfolio",
          desc: "Diverse portfolio of companies and assets. Actively managed for growth and profit.",
          link: "https://portfolio.burgeonadaire.com",
        },
        {
          id: 1,
          name: "Blog",
          desc: "Insights on finance and technology. Explore our thoughts and join the conversation.",
          link: "https://blog.burgeonadaire.com",
        },
        {
          id: 2,
          name: "The Adaire Solutions",
          desc: "IT solutions and cloud innovation. Driving business growth through technology.",
          link: "https://adairesolutions.com",
        },
        {
          id: 3,
          name: "eCommerce",
          desc: "Shop our diverse merchandise. Find unique items and show your support.",
          link: "https://shop.burgeonadaire.com",
        },
        {
          id: 4,
          name: "Organizations",
          desc: "Our impactful partnerships. Collaborating for positive change.",
          link: "https://org.burgeonadaire.com",
        },
      ],
    };
  }

  render() {
    return (
      <div className="burgeon-mobile-first-operations col-md-12">
        <Slider {...settings}>
          {this.state.items.map((data, index) => (
            <div key={index} className="portfolio-box rounded p-4 h-100">
              <div className="d-flex h-100 flex-column justify-content-between align-items-start">
                <div>
                  <a
                    className="text-decoration-none"
                    href={data.link}
                    rel="noopener"
                    target="_blank"
                  >
                    <h5 className="text-light">{data.name}</h5>
                  </a>
                  <p className="text-light">{data.desc}</p>
                </div>
                <div className="d-flex justify-content-end">
                  <span className="badge text-bg-danger">WIP</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
