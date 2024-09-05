import React, { Component } from 'react';
import {
  Logo
} from './images';
// import Slider from "react-slick";

// const jumbotronItems = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

export default class BurgeonJumbotron extends Component {
  render() {
    return (
      <div className="bai-jumbotron d-flex align-items-center justify-content-center">
        <img src={Logo} alt="PT. Burgeon Adaire International Logo" className="jumbotron-logo d-block"></img>
      </div>
    );
  }
}
