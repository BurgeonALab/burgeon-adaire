import React, { Component } from 'react';

export default class BSmallNews extends Component {
  render() {
    return (
      <div className='valbury-box h-50 rounded p-4'>
        <div className='valbury-box-container-mobile d-flex h-100 flex-column justify-content-between'>
          <h5 className='text-light'>Economic News</h5>
          <div className='d-flex flex-column align-items-end'>
            <span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
          </div>
        </div>
      </div>
    );
  }
}