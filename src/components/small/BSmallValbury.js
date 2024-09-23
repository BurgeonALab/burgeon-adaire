import React, { Component, Fragment } from 'react';
import moment from 'moment';
import Slider from "react-slick";

import $ from 'jquery';

const settings = {
  infinite: false,
  slidesToShow: 1,
  speed: 500,
  fade: true,
};

export default class BSmallValbury extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valburysignal: [],
      marketday: "",
      goldnews: [],
      oilnews: [],
      usdnews: [],
      sumnews: [],
      VSLoaded: false,
      DateLoaded: false,
      GoldLoaded: false,
      OilLoaded: false,
      USLoaded: false,
      SumsLoaded: false,
    };
  }

  ValburyData = async () => {
    const TimeData = async () => {
      await fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia%2FJakarta')
        .then(async response => await response.json())
        .then((data) => {
          this.setState({
            marketday: data['dateTime'],
            DateLoaded: true,
          });
        })
        .catch(error => {
          error = "Date: No data"
          console.log(error);
        });
    };

    const LatestDate = async () => {
      await fetch('https://api.burgeonadaire.com/valbury-bulletin')
        .then(async response => await response.json())
        .then((data) => {
          this.setState({
            valburysignal: data['document']['xauusd_signals'].pop(),
            VSLoaded: true,
          });
        })
        .catch(error => {
          error = "Signal: No Data"
          console.log(error);
        });
    };

    Promise.all([TimeData(), LatestDate()]);
  };

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

  jQuery = () => {
    var windowWidth = $(window).width();
    var initiateOrder = this.state.valburysignal;
    var countOrder = initiateOrder.length;
    var setdate = new Date(Date(this.state.marketday));
    var dayorder = moment(setdate).locale('id').format('dddd');
    var daytime = moment(setdate).locale('id').format('HH:mm:ss').toString();
    var dayopen = '05:00:00';

    if (windowWidth <= 768) {
      var varvafFirst = 'still';
      var varvafSecond = 'still';
      var orderdata = 'still';
      var firstvaf = 'still';

      function ShowVafDetailFirst($) {
        $('.news-title').hide();
        $('.news-title-mobile-expanded').hide();
        $('.valbury-box:nth-child(1)').removeClass('width-20-percent');
        $('.valbury-box:nth-child(2)').removeClass('width-80-percent');
        $('.valbury-box:nth-child(1)').addClass('width-80-percent');
        $('.valbury-box:nth-child(2)').addClass('width-20-percent');
        if (windowWidth <= 450) {
          $('.valbury-box-container-mobile h5').hide();
          $('#status-message-mobile').hide();
          $('#status-market').hide();
          $('#status-signal').hide();
          $('.vaf-slide-container').css('margin-top', '24px');
          $('.signal-order-box-custom').css('margin-top', '220px');
          $('.signal-order-box-custom').show();
        } else {
          $('.signal-order-box-custom').show();
        }
        $('.valbury-box:nth-child(1) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
        $('.valbury-box:nth-child(2) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
        varvafFirst = 'readycollapse';
        orderdata = 'readyhide';
      }

      function HideVafDetailFirst($) {
        if (varvafFirst === 'readycollapse') {
          if (orderdata === 'readyhide') {
            if (countOrder == undefined || countOrder.length == 0) {
              $('.signal-order-box-custom').hide();
              $('.vaf-slide-container').css('margin-top', '92px');
              $('.signal-order-box-custom').css('margin-top', '');
              $('.valbury-box-container-mobile h5').show();
              $('#status-market').show();
              $('#status-signal').show();
            } else {
              $('.signal-order-box-custom').hide();
              $('.vaf-slide-container').css('margin-top', '92px');
              $('.signal-order-box-custom').css('margin-top', '');
              $('.valbury-box-container-mobile h5').show();
              $('#status-market').show();
              $('#status-signal').show();
            }
            $('.signal-order-box-custom').hide();
            $('.news-title').hide();
            $('.news-title-mobile-expanded').hide();
            orderdata = 'hide';
            if (dayorder === 'Sabtu' || dayorder === 'Minggu' || dayorder === 'Senin' && daytime <= dayopen) {
              $('#status-signal').hide();
              $('#status-message-mobile').hide();
            }
            if (firstvaf === 'readyexpand' || dayorder === 'Sabtu' || dayorder === 'Minggu' || dayorder === 'Senin' && daytime <= dayopen) {
              $('#status-message-mobile').hide();
            }
            $('#status-message-mobile').show();
          } else {
            if (windowWidth <= 450) {
              $('#status-message-mobile').hide();
              $('#status-market').hide();
              $('#status-signal').hide();
              $('.signal-order-box-custom').show();
              orderdata = 'still';
            } else {
              $('.signal-order-box-custom').show();
              orderdata = 'still';
            }
          }
          $('.signal-order-box-custom').hide();
          $('.valbury-box:nth-child(1)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(2)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(2)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          varvafFirst = 'still';
        } else if (varvafSecond === 'readycollapse') {
          $('.valbury-box:nth-child(1)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          $('.valbury-box:nth-child(2)').addClass('width-20-percent');
          $('.valbury-box:nth-child(1)').addClass('width-80-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
          varvafFirst = 'readycollapse';
          varvafSecond = 'still';
        }
      }

      function ToogleVafRight($) {
        if (varvafSecond === 'readycollapse') {
          if (orderdata === 'readyhide') {
            if (windowWidth <= 768 || countOrder == undefined || countOrder.length == 0) {
              $('.signal-order-box-custom').hide();
              $('#status-message-mobile').hide();
              $('#status-market').show();
              $('#status-signal').show();
            } else {
              $('.signal-order-box-custom').hide();
              $('#status-message-mobile').show();
              $('#status-market').show();
              $('#status-signal').show();
            }
          }
          $('.valbury-box:nth-child(2)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(1)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(1)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          if (dayorder === 'Sabtu' || dayorder === 'Minggu' || dayorder === 'Senin' && daytime <= dayopen) {
            $('#status-signal').hide();
            $('#status-message-mobile').hide();
          }
          if (countOrder == undefined || countOrder.length == 0) {
            $('#status-message-mobile').hide();
          }
          $('.news-title-mobile-expanded').hide();
          $('.news-title-mobile').show();
          $('#status-message-mobile').show();
          firstvaf = 'still';
          varvafSecond = 'still';
        } else if (varvafFirst === 'readycollapse') {
          $('.valbury-box-container-mobile h5').show();
          $('.news-title').hide();
          $('.news-title-mobile').hide();
          $('.news-title-mobile-expanded').show();
          $('#status-message-mobile').show();
          $('.valbury-box:nth-child(2)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          $('.valbury-box:nth-child(1)').addClass('width-20-percent');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
          $('.valbury-box:nth-child(2)').addClass('width-80-percent');
          $('.vaf-slide-container').css('margin-top', '92px');
          $('.signal-order-box-custom').css('margin-top', '');
          firstvaf = 'readyexpand';
          varvafSecond = 'readycollapse';
          varvafFirst = 'still';
        } else {
          $('.news-title').hide();
          $('.news-title-mobile').hide();
          $('.news-title-mobile-expanded').show();
          $('.valbury-box:nth-child(2)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(1)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          $('.valbury-box:nth-child(2)').addClass('width-80-percent');
          $('.valbury-box:nth-child(1)').addClass('width-20-percent');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
          if (firstvaf === 'readyexpand') {
            firstvaf = 'still';
          };
          firstvaf = 'readyexpand';
          varvafSecond = 'readycollapse';
        };
      }

      $('.ordering-badges-valbury-mobile').on("click", function () {
        ShowVafDetailFirst(jQuery);
      });

      $('.signal-order-box-custom').on("click", function () {
        HideVafDetailFirst(jQuery);
      });

      $('.valbury-box:nth-child(1)').on("click", function () {
        if (firstvaf === 'readyexpand') {
          ToogleVafRight(jQuery);
        };
      });

      $('.valbury-box:nth-child(2)').on("click", function () {
        ToogleVafRight(jQuery);
      });
    };
  };

  componentDidMount() {
    Promise.all([this.ValburyData(), this.jQuery()]);
    this.FetchNews();
  }

  render() {
    var valorder = this.state.valburysignal.order;
    var dateraw = new Date(Date(this.state.marketday));
    var dateday = moment(dateraw).locale('id').format('dddd');
    var valorderDate = moment(new Date((this.state.valburysignal.date))).locale('id').format('ll');
    var datedayDate = moment(dateraw).locale('id').format('ll');
    var datetime = moment(dateraw).locale('id').format('HH:mm:ss').toString();
    var timeopen = '05:00:00';

    function DataTradeClean($) {
      $(".data-unavailable-signal").hide().removeClass('data-unavailable');
      $(".signal-order-box-custom").removeClass("data-unavailable-background");
      $(".signal-order-box-custom").removeClass("data-sell-background");
      $(".ordering-badges-valbury-mobile").attr('style', 'justify-content:space-between !important');
      $(".data-detail-valbury").attr('style', 'display:flex !important');
    };

    function DataTradeUnavailable($) {
      $(".data-detail-valbury").attr('style', 'display:none !important');
      if (dateday === 'Sabtu' || dateday === 'Minggu' || dateday === 'Senin' && datetime <= timeopen) {
        $(".data-closed-signal").show().addClass('data-unavailable');
      } else {
        $(".data-unavailable-signal").show().addClass('data-unavailable');
      }
      $(".signal-order-box-custom").addClass("data-unavailable-background");
      $(".signal-order-box-custom").addClass("data-sell-background");
      $(".ordering-badges-valbury-mobile").attr('style', 'justify-content:flex-end !important');
      if (dateday === 'Sabtu' || dateday === 'Minggu' || dateday === 'Senin' && datetime <= timeopen) {
        $('.signal-order-text').hide();
      }
      $("#status-message").hide();
      $("#status-message-mobile").hide();
    };

    function MarketBadgesClean($) {
      $("#status-market").removeClass("text-bg-secondary");
      $("#status-market").removeClass("text-bg-dark");
      $("#status-market").removeClass("text-bg-light");
      $("#status-market").removeClass("text-bg-warning");
      $("#status-market").removeClass("text-bg-primary");
    };

    function BadgeWarning($) {
      $("#status-signal").show();
      $("#status-signal").removeClass("text-bg-secondary");
      $("#status-signal").addClass("text-bg-danger");
      $("#status-signal").html("Expired");
    };

    function BadgeActive($) {
      $("#status-signal").show();
      $("#status-signal").removeClass("text-bg-secondary");
      $("#status-signal").addClass("text-bg-primary");
      $("#status-signal").html("Active");
    };

    function MarketClosed($) {
      $("#status-signal").hide();
      $("#status-signal").show();
      $("#status-market").addClass("text-bg-dark");
      $("#status-market").html("XAU/USD");
      $('.valbury-box:first-child').css('background-color', '#272731');
      DataTradeClean(jQuery);
      MarketBadgesClean(jQuery);
      DataTradeUnavailable(jQuery);
    };

    function MarketWaiting($) {
      $("#status-signal").show();
      $("#status-market").addClass("text-bg-light");
      $("#status-market").html("XAU/USD");
      $("#status-signal").html("Waiting");
      $('.valbury-box:first-child').css('background-color', '#272731');
      DataTradeClean(jQuery);
      MarketBadgesClean(jQuery);
      DataTradeUnavailable(jQuery);
    };

    function MarketOpen($) {
      var windowValbury = $(window).width();

      if (windowValbury <= 768) {
        if (valorder == undefined) {
          $("#status-message-mobile").hide();
        } else {
          $("#status-message-mobile").show();
        }
      } else if (windowValbury >= 768) {
        $("#status-message").show();
      }
      $("#status-market").addClass("text-bg-success");
      $("#status-market").html("XAU/USD");
      DataTradeClean(jQuery);
      MarketBadgesClean(jQuery);
    };

    function MarketSell($) {
      if (dateday === 'Sabtu' || dateday === 'Minggu' || dateday === 'Senin' && datetime <= timeopen) {
        MarketClosed(jQuery);
      } else {
        DataTradeClean(jQuery);
        if (valorderDate != datedayDate) {
          BadgeWarning(jQuery);
        } else {
          BadgeActive(jQuery);
        }
        $(".signal-order-box-custom").addClass("data-sell-background");
        $('.valbury-box:first-child').css('background-color', '#A32525');
      }
    };

    function MarketBuy($) {
      if (dateday === 'Sabtu' || dateday === 'Minggu' || dateday === 'Senin' && datetime <= timeopen) {
        MarketClosed(jQuery);
      } else {
        DataTradeClean(jQuery);
        if (valorderDate != datedayDate) {
          BadgeWarning(jQuery);
        } else {
          BadgeActive(jQuery);
        }
        $('.valbury-box:first-child').css('background-color', '#1F4B8A');
      }
    };

    function MarketUnavailable($) {
      $("#status-signal").hide();
      $("#status-signal").show();
      $("#status-market").addClass("text-bg-dark");
      $("#status-market").html("XAU/USD");
      $('.valbury-box:first-child').css('background-color', '#272731');
      DataTradeClean(jQuery);
      MarketBadgesClean(jQuery);
      DataTradeUnavailable(jQuery);
    };

    function MarketStatus() {
      if (valorder == undefined) {
        DataTradeClean(jQuery);
        if (dateday === 'Sabtu' || dateday === 'Minggu') {
          MarketClosed(jQuery);
        } else {
          MarketWaiting(jQuery);
        }
      } else {
        if (dateday === 'Senin' || dateday === 'Selasa' || dateday === 'Rabu' || dateday === 'Kamis' || dateday === 'Jumat') {
          MarketOpen(jQuery);
          if (valorder === 'buy') {
            MarketBuy(jQuery);
          } else if (valorder === 'sell') {
            MarketSell(jQuery);
          }
        } else {
          MarketUnavailable(jQuery);
        }
      };
    }

    const goldSlider = () => {
      $('.vaf-slide-button.yen').removeClass('active');
      $('.vaf-slide-button.crude').removeClass('active');
      $('.vaf-slide-button.gold').addClass('active');
      $("#status-market").html("XAU/USD");
    }

    const crudeSlider = () => {
      $('.vaf-slide-button.gold').removeClass('active');
      $('.vaf-slide-button.yen').removeClass('active');
      $('.vaf-slide-button.crude').addClass('active');
      $("#status-market").html("CLR");
    }

    const yenSlider = () => {
      $('.vaf-slide-button.gold').removeClass('active');
      $('.vaf-slide-button.crude').removeClass('active');
      $('.vaf-slide-button.yen').addClass('active');
      $("#status-market").html("USD/JPY");
    }

    $(function () {
      MarketStatus();
    });

    return (
      <Fragment>
        <div className='valbury-box h-50 rounded p-4 position-relative'>
          <div className='valbury-box-container-mobile h-100 d-flex flex-column justify-content-between'>
            <h5 className='text-light'>VAF Trading Suggestions</h5>
            <div className='d-flex flex-row vaf-slide-container'>
              <a onClick={goldSlider} className='vaf-slide-button gold active'></a>
              <a onClick={crudeSlider} className='vaf-slide-button crude'></a>
              <a onClick={yenSlider} className='vaf-slide-button yen'></a>
            </div>
            <div className='d-flex flex-column justify-content-center'>
              <div className='signal-order-box-custom'>
                <p className='data-unavailable-signal mb-0'>Data Unavailable</p>
                <p className='data-closed-signal mb-0'>Market Closed</p>
                <p className='signal-order-text text-light text-end fw-bold mb-0'>{this.state.valburysignal.order}</p>
                <div className='d-flex flex-row data-detail-valbury'>
                  <div className='flex-grow-1'>
                    <p className='signal-order-description mb-0 text-end fw-bold my-1 text-light'>Price:</p>
                    <p className='signal-order-description mb-0 text-end fw-bold my-1 text-light'>Stop Loss:</p>
                    <p className='signal-order-description mb-0 text-end fw-bold my-1 text-light'>Take Profit 1:</p>
                    <p className='signal-order-description mb-0 text-end fw-bold my-1 text-light'>Take Profit 2:</p>
                  </div>
                  <div>
                    <p className='signal-order-description mb-0 text-end fw-medium my-1 text-light'>&nbsp;{this.state.valburysignal.price}</p>
                    <p className='signal-order-description mb-0 text-end fw-medium my-1 text-light'>&nbsp;{this.state.valburysignal.stoploss}</p>
                    <p className='signal-order-description mb-0 text-end fw-medium my-1 text-light'>&nbsp;{this.state.valburysignal.takeprofit1}</p>
                    <p className='signal-order-description mb-0 text-end fw-medium my-1 text-light'>&nbsp;{this.state.valburysignal.takeprofit2}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='ordering-badges-valbury-mobile d-flex flex-row justify-content-between align-items-end'>
              <span id="status-message" className="badge text-bg-warning badge-fit-content mt-2">Be Wisely</span>
              <div className='two-badges-small d-flex flex-column align-items-end'>
                <span id="status-market" className="badge text-bg-secondary badge-fit-content mt-2">Status Market</span>
                <span id="status-signal" className="badge text-bg-secondary badge-fit-content mt-2">Status Signal</span>
              </div>
              <span id="status-message-mobile" className="badge text-bg-warning badge-fit-content mt-2">Be Wisely</span>
            </div>
          </div>
        </div>
        <div className='valbury-box h-50 rounded'>
          <div className='valbury-box-container-mobile d-flex h-100 flex-column justify-content-between'>
            <Slider {...settings}>
              {
                this.state.sumnews.map((data, index) => (
                  <div key={index} className='h-100'>
                    <img loading="lazy" className='news-content-image' src={data.image_url}></img>
                    <div className='news-content-container d-flex flex-column justify-content-between'>
                      <div>
                        <a href={data.news_url} className='text-decoration-none' target='_blank' rel='noopener'>
                          <h5 className='news-title text-light'>{data.title}</h5>
                        </a>
                        <a href={data.news_url} className='text-decoration-none' target='_blank' rel='noopener'>
                          <h5 className='news-title-mobile text-light'>{data.title.slice(0, data.title.length - (data.title.length / 2)) + "..."}</h5>
                        </a>
                        <a href={data.news_url} className='text-decoration-none' target='_blank' rel='noopener'>
                          <h5 className='news-title-mobile-expanded text-light'>{data.title}</h5>
                        </a>
                        <p className='text-light'>{moment(data.date).locale('en').format('ll')}</p>
                      </div>
                      <div>
                        <p className='text-light mb-2 fw-bold'>{data.sentiment}</p>
                        <p className='text-light mb-0 fw-medium'>{data.topics[0]}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
            {/* <div className='d-flex flex-column align-items-end'>
              <span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
            </div> */}
          </div>
        </div>
      </Fragment>
    );
  }
}