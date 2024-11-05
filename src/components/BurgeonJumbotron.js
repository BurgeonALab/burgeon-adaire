import React, { Component, Suspense, lazy } from 'react';
import Slider from "react-slick";
import $ from 'jquery';

const settings = {
  infinite: false,
  slidesToShow: 1,
  speed: 500,
  variableWidth: true,
};

const BSmallSSRJumbotronSlider = lazy(() => import('./small/BSmallJumbotronSlider'));

export default class BurgeonJumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        {
          vname: "Development",
          description: "We are constantly pushing ourselves to grow and improve in everything we take on."
        },
        {
          vname: "Cooperation",
          description: "Collaboration and strong partnerships are fundamental to our approach."
        },
        {
          vname: "Mastery",
          description: "We pursue excellence through constant skill refinement and exceptional outcomes."
        },
        {
          vname: "Trustworthiness",
          description: "Integrity and reliability are foundational to our work, fostering trust with clients and partners."
        }
      ]
    }
  }

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
              {this.state.values.map((data, i) => (
                <Suspense>
                  <BSmallSSRJumbotronSlider DataTitle={data.vname} DataDescription={data.description} />
                </Suspense>
              ))}
            </Slider>
          </div>
        </div>
        <img src="https://images.burgeonadaire.com/logo.webp" alt="PT. Burgeon Adaire International Logo" className="jumbotron-logo d-block"></img>
      </div>
    );
  }
}
