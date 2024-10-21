import React, { Component } from "react";

export default class BSmallSSRJumbotronSlider extends Component {
  render() {
    return (
      <div className='jumbotron-item' style={{ width: 300 }}>
        <p className='text-light lead fw-medium mb-2'>{this.props.DataTitle}</p>
        <p className='text-light mb-0'>{this.props.DataDescription}</p>
      </div>
    );
  }
}