import React, { Component } from 'react';
import {
  Logo
} from './images';

export default class BurgeonOutro extends Component {
  render() {
    return (
      <div className='preload'>
        <img src={Logo} alt="PT. Burgeon Adaire International Logo"></img>
      </div>
    );
  }
}