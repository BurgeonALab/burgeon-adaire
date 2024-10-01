import React, {
  Component,
  Fragment,
} from 'react';
import Slider from "react-slick";
import $ from 'jquery';

const settings = {
  infinite: false,
  slidesToShow: 1,
  speed: 500,
  variableWidth: true,
};

export default class BurgeonSSRJumbotron extends Component {
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
      <Fragment>
        <div className="bai-jumbotron d-flex align-items-center justify-content-center">
          <video id="jumbotron-player" poster="https://images.burgeonadaire.com/smokegrey_thumbnail.webp" autoPlay loop muted>
            <source src="https://resources.burgeonadaire.com/videos/smokegrey.mp4" type='video/mp4'></source>
          </video>
          <div className='jumbotron-overlay d-flex flex-column justify-content-center'>
            <div className='jumbotron-overlay-text-box mb-4'>
              <h3 className='text-light text-end'>Core Values</h3>
              <p className='text-light text-end mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="slider-container">
              <Slider {...settings}>
                <div className='jumbotron-item' style={{ width: 300 }}>
                  <p className='text-light lead fw-medium mb-2'>Development</p>
                  <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='jumbotron-item' style={{ width: 300 }}>
                  <p className='text-light lead fw-medium mb-2'>Cooperation</p>
                  <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='jumbotron-item' style={{ width: 300 }}>
                  <p className='text-light lead fw-medium mb-2'>Mastery</p>
                  <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='jumbotron-item' style={{ width: 300 }}>
                  <p className='text-light lead fw-medium mb-2'>Trustworthiness</p>
                  <p className='text-light mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Slider>
            </div>
          </div>
          <img src="https://images.burgeonadaire.com/logo.webp" alt="PT. Burgeon Adaire International Logo" className="jumbotron-logo d-block"></img>
        </div>
      </Fragment>
    );
  }
}