import React, { Component } from 'react';
import Slider from "react-slick";
import $ from 'jquery';

const settings = {
  infinite: false,
  slidesToShow: 1,
  speed: 500,
  variableWidth: true,
};

export default class BurgeonJumbotron extends Component {
  jQuery = () => {
    $(function () {
      $(window).on("scroll", function () {
        if ($(document).scrollTop() > 24) {
          $('.jumbotron-logo').css('transform', 'rotate(180deg)');
        } else {
          $('.jumbotron-logo').css('transform', 'rotate(0deg)');
        }
      });
    });
  }

  componentDidMount() {
    this.jQuery();
  }

  render() {
    return (
      <div className="bai-jumbotron d-flex align-items-center justify-content-center">
        <video id="jumbotron-player" poster="https://images.burgeonadaire.com/smokegrey_thumbnail.webp" autoPlay loop muted>
          <source src="https://resources.burgeonadaire.com/videos/smokegrey.mp4" type='video/mp4'></source>
        </video>
        <div className='jumbotron-overlay d-flex flex-column justify-content-center'>
          <div className='jumbotron-overlay-text-box mb-4'>
            <h3 className='text-light text-end'>Core Values</h3>
            <p className='text-light text-end mb-0'>Our core values shape our identity and guide us toward success, driving our decisions and helping us achieve our goals consistently.</p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className='jumbotron-item' style={{ width: 300 }}>
                <p className='text-light lead fw-medium mb-2'>Development</p>
                <p className='text-light mb-0'>We are constantly pushing ourselves to grow and improve in everything we take on.</p>
              </div>
              <div className='jumbotron-item' style={{ width: 300 }}>
                <p className='text-light lead fw-medium mb-2'>Cooperation</p>
                <p className='text-light mb-0'>Collaboration and strong partnerships are fundamental to our approach.</p>
              </div>
              <div className='jumbotron-item' style={{ width: 300 }}>
                <p className='text-light lead fw-medium mb-2'>Mastery</p>
                <p className='text-light mb-0'>We pursue excellence through constant skill refinement and exceptional outcomes.</p>
              </div>
              <div className='jumbotron-item' style={{ width: 300 }}>
                <p className='text-light lead fw-medium mb-2'>Trustworthiness</p>
                <p className='text-light mb-0'>Integrity and reliability are foundational to our work, fostering trust with clients and partners.</p>
              </div>
            </Slider>
          </div>
        </div>
        <img src="https://images.burgeonadaire.com/logo.webp" alt="PT. Burgeon Adaire International Logo" className="jumbotron-logo d-block"></img>
      </div>
    );
  }
}
