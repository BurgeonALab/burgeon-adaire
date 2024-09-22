import React, { Component } from 'react';

export default class BSmallNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goldnews: [],
      oilnews: [],
      usdnews: [],
      sumnews: [],
      GoldLoaded: false,
      OilLoaded: false,
      USLoaded: false,
      SumsLoaded: false,
    };
  }

  FetchNews = async () => {
    const GoldNews = async () => {
      await fetch('https://resources.burgeonadaire.com/news-api/gold-data.json')
        .then(async response => await response.json())
        .then((data) => {
          this.setState({
            sumnews: [...this.state.sumnews, data['data'].slice(0, 2)],
            GoldLoaded: true,
          });
        })
        .catch(error => {
          error = "Date: No Data"
          console.log(error);
        });
    };

    const OilNews = async () => {
      await fetch('https://resources.burgeonadaire.com/news-api/oil-data.json')
        .then(async response => await response.json())
        .then((data) => {
          this.setState({
            sumnews: [...this.state.sumnews, data['data'].slice(0, 2)],
            OilLoaded: true,
          });
        })
        .catch(error => {
          error = "Date: No Data"
          console.log(error);
        });
    };

    const USDNews = async () => {
      await fetch('https://resources.burgeonadaire.com/news-api/united-states.json')
        .then(async response => await response.json())
        .then((data) => {
          this.setState({
            sumnews: [...this.state.sumnews, data['data'].slice(0, 2)],
            USLoaded: true,
          });
        })
        .catch(error => {
          error = "Date: No Data"
          console.log(error);
        });
    };

    Promise.all([GoldNews(), OilNews(), USDNews()]);
  }

  componentDidMount() {
    this.FetchNews();
  }

  render() {
    console.log(this.state.sumnews);
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