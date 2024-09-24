import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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
          var tempData = data['data'].slice(0, 2);
          this.setState(previousState => ({
            sumnews: [...previousState.sumnews, ...tempData],
          }));
        })
        .catch(error => {
          error = "Date: No Data";
          console.log(error);
        });
    };

    const USNews = async () => {
      await fetch('https://resources.burgeonadaire.com/news-api/united-states.json')
        .then(async response => await response.json())
        .then((data) => {
          var tempData = data['data'].slice(0, 2);
          this.setState(previousState => ({
            sumnews: [...previousState.sumnews, ...tempData],
          }));
        })
        .catch(error => {
          error = "Date: No Data";
          console.log(error);
        });
    };

    const CrudeOil = async () => {
      await fetch('https://resources.burgeonadaire.com/news-api/oil-data.json')
        .then(async response => await response.json())
        .then((data) => {
          var tempData = data['data'].slice(0, 2);
          this.setState(previousState => ({
            sumnews: [...previousState.sumnews, ...tempData],
          }));
        })
        .catch(error => {
          error = "Date: No Data";
          console.log(error);
        });
    };

    Promise.all([GoldNews(), USNews(), CrudeOil()]);
  }

  componentDidMount() {
    this.FetchNews();
  }

  render() {
    const settings = {
      infinite: false,
      slidesToShow: 1,
      speed: 500,
      fade: true,
    };

    const SliderCount = () => {
      var currentNumber = 1;
      return (
        <div className='news-pagination d-flex flex-row align-items-center h-100'>
          <a role='button' className='d-flex'>
            <FontAwesomeIcon icon={faChevronLeft} className='link-light' size='sm' />
          </a>
          <div className='px-2'>
            <p className='text-light mb-0 fw-medium'>{currentNumber}&nbsp;</p>
          </div>
          <p className='text-light mb-0 fw-medium'>/</p>
          <div className='px-2'>
            <p className='text-light mb-0 fw-medium'>&nbsp;{this.state.sumnews.length}</p>
          </div>
          <a role='button' className='d-flex'>
            <FontAwesomeIcon icon={faChevronRight} className='link-light' size='sm' />
          </a>
        </div>
      );
    }

    return (
      <Fragment>
        <div className='valbury-box h-50 rounded'>
          <div className='valbury-box-container-mobile d-flex h-100 flex-column justify-content-between'>
            <Slider {...settings}>
              {
                this.state.sumnews.map((data, index) => (
                  <div key={index} className='h-100'>
                    <img loading="lazy" className='news-content-image' src={data.image_url}></img>
                    <div className='news-content-container d-flex flex-column justify-content-between'>
                      <div className='news-content-detail'>
                        <a href={data.news_url} className='text-decoration-none' target='_blank' rel='noopener'>
                          <h5 className='news-title text-light'>{data.title}</h5>
                        </a>
                        <a href={data.news_url} className='text-decoration-none' target='_blank' rel='noopener'>
                          <h5 className='news-title-mobile text-light'>{data.title.slice(0, data.title.length - (data.title.length / 1.5)) + "..."}</h5>
                        </a>
                        <a href={data.news_url} className='text-decoration-none' target='_blank' rel='noopener'>
                          <h5 className='news-title-mobile-expanded text-light'>{data.title}</h5>
                        </a>
                        <p className='text-light'>{moment(data.date).locale('en').format('ll')}</p>
                      </div>
                      <div className='news-content-detail d-flex flex-row align-items-between'>
                        <div className='flex-grow-1'>
                          {
                            data.sentiment === 'Negative' ? <p className='text-light mb-0 fw-bold'>Negative</p> : data.sentiment === 'Positive' ? <p className='text-light mb-0 fw-bold'>Positive</p> : <p className='text-light mb-0 fw-bold'>Neutral</p>
                          }
                          <p className='text-light mb-0 fw-medium'>{data.topics[0]}</p>
                        </div>
                        <div>
                          <SliderCount />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </Fragment>
    );
  }
}