import React, { Component } from 'react';
import {
  BAILogoGenWhite
} from './images';

export default class BAIJumbotron extends Component {
  render() {
    return (
      <div className="bai-jumbotron d-flex align-items-center justify-content-center">
        <img src={BAILogoGenWhite} height={256} alt="PT. Burgeon Adaire International Jumbotron Logo" className="jumbotron-logo d-block"></img>
      </div>
    );
  }
}
