import React, { Component } from 'react';
import {
  Logo
} from './images';
import Slider from "react-slick";
import $ from 'jquery';
import {
  SmokeGrey,
  SmokeGreyThumbnail,
} from './videos';

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
      <div className="bai-jumbotron d-flex align-items-center justify-content-center mb-4">
        <video id="jumbotron-player" poster={SmokeGreyThumbnail} autoPlay loop muted>
          <source src={SmokeGrey} type='video/mp4'></source>
        </video>
        <div className='jumbotron-overlay d-flex flex-column justify-content-center'>
          <div className='jumbotron-overlay-text-box mb-4'>
            <h3 className='text-light text-end'>Core Values</h3>
            <p className='text-light text-end mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className='jumbotron-item' style={{ width: 300 }}>
                <p className='text-light lead fw-medium mb-2'>Lorem Ipsum</p>
                <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='jumbotron-item' style={{ width: 300 }}>
                <p className='text-light lead fw-medium mb-2'>Lorem Ipsum</p>
                <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='jumbotron-item' style={{ width: 300 }}>
                <p className='text-light lead fw-medium mb-2'>Lorem Ipsum</p>
                <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className='jumbotron-item' style={{ width: 300 }}>
                <p className='text-light lead fw-medium mb-2'>Lorem Ipsum</p>
                <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </Slider>
          </div>
        </div>
        <img src={Logo} alt="PT. Burgeon Adaire International Logo" className="jumbotron-logo d-block"></img>
      </div>
    );
  }
}
