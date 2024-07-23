import React, { Component } from 'react';

export default class BAIJumbotron extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row about-container">
          <div className="col-md-6 about-items p-3">
            <div className="about-contents rounded"></div>
          </div>
          <div className="col-md-6 about-items p-3">
            <div className="about-contents rounded"></div>
          </div>
        </div>
      </div>
    );
  }
}
