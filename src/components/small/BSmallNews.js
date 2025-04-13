import React, { Component, Fragment } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import {
  faChevronLeft,
  faChevronRight,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { BAIContainerButtons } from "../../functions/BAIContainerButtons";

export default class BSmallNews extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  FetchNews = async () => {
    const GoldNews = async () => {
      await fetch("https://api.burgeonadaire.com/news/gold")
        .then(async (response) => await response.json())
        .then((data) => {
          var tempData = data["data"].slice(0, 3);
          console.log(tempData);
          this.setState((previousState) => ({
            sumnews: [...previousState.sumnews, ...tempData],
          }));
        })
        .catch((error) => {
          error = "Date: No Data";
          console.log(error);
        });
    };

    const USNews = async () => {
      await fetch("https://api.burgeonadaire.com/news/usa")
        .then(async (response) => await response.json())
        .then((data) => {
          var tempData = data["data"].slice(0, 3);
          console.log(tempData);
          this.setState((previousState) => ({
            sumnews: [...previousState.sumnews, ...tempData],
          }));
        })
        .catch((error) => {
          error = "Date: No Data";
          console.log(error);
        });
    };

    const CrudeOil = async () => {
      await fetch("https://api.burgeonadaire.com/news/clr")
        .then(async (response) => await response.json())
        .then((data) => {
          var tempData = data["data"].slice(0, 3);
          console.log(tempData);
          this.setState((previousState) => ({
            sumnews: [...previousState.sumnews, ...tempData],
          }));
        })
        .catch((error) => {
          error = "Date: No Data";
          console.log(error);
        });
    };

    Promise.all([GoldNews(), USNews(), CrudeOil()]);
  };

  jQuery = () => {
    BAIContainerButtons({ marketday: this.state.marketday });
  };

  componentDidMount() {
    this.FetchNews();
    this.jQuery();
  }

  render() {
    console.log(this.state.sumnews);
    const settings = {
      infinite: false,
      slidesToShow: 1,
      speed: 500,
      fade: true,
    };

    return (
      <Fragment>
        <div className="valbury-news valbury-box h-50 rounded">
          <div className="valbury-box-container-mobile d-flex h-100 flex-column justify-content-between">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.state.sumnews.map((data, index) => (
                <div key={index} className="h-100">
                  <img
                    loading="lazy"
                    className="news-content-image"
                    src={data.image_url}
                    alt={data.title}
                  ></img>
                  <div className="news-content-container d-flex flex-column justify-content-between">
                    <div className="news-content-detail">
                      <a
                        href={data.news_url}
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener"
                      >
                        <h5 className="news-title text-light fw-bold">
                          {data.title}
                        </h5>
                      </a>
                      <a
                        href={data.news_url}
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener"
                      >
                        <h5 className="news-title-mobile text-light fw-bold">
                          {data.title.slice(
                            0,
                            data.title.length - data.title.length / 1.5
                          ) + "..."}
                        </h5>
                      </a>
                      <a
                        href={data.news_url}
                        className="text-decoration-none"
                        target="_blank"
                        rel="noopener"
                      >
                        <h5 className="news-title-mobile-expanded text-light">
                          {data.title}
                        </h5>
                      </a>
                      <p className="text-light">
                        {moment(data.date).locale("en").format("ll")}
                      </p>
                    </div>
                    <div className="news-content-detail d-flex flex-row align-items-between">
                      <div className="flex-grow-1">
                        {data.sentiment === "Negative" ? (
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            className="text-danger"
                            size="xl"
                          />
                        ) : data.sentiment === "Positive" ? (
                          <FontAwesomeIcon
                            icon={faCaretUp}
                            className="text-success"
                            size="xl"
                          />
                        ) : (
                          <p className="text-light mb-0 fw-bold">Neutral</p>
                        )}
                        {data.topics[0] === "USA" ? (
                          <p className="text-light mb-0 fw-medium">USA</p>
                        ) : data.topics[0] === "India" ? (
                          <p className="text-light mb-0 fw-medium">USA</p>
                        ) : (
                          <p className="text-light mb-0 fw-medium">
                            {data.topics[0]}
                          </p>
                        )}
                      </div>
                      <div>
                        <div className="news-pagination d-flex flex-row align-items-center h-100">
                          <a
                            role="button"
                            className="d-flex"
                            onClick={this.previous}
                          >
                            <FontAwesomeIcon
                              icon={faChevronLeft}
                              className="link-light"
                              size="sm"
                            />
                          </a>
                          <div className="px-2">
                            <p className="text-light mb-0 fw-medium">
                              {index + 1}&nbsp;
                            </p>
                          </div>
                          <p className="text-light mb-0 fw-medium">/</p>
                          <div className="px-2">
                            <p className="text-light mb-0 fw-medium">
                              &nbsp;{this.state.sumnews.length}
                            </p>
                          </div>
                          <a
                            role="button"
                            className="d-flex"
                            onClick={this.next}
                          >
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="link-light"
                              size="sm"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Fragment>
    );
  }
}
