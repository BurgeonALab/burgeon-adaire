import React, { Component, Fragment } from 'react';
import moment from 'moment';
import "moment/locale/id";
import $ from 'jquery';
import { BAIContainerButtons } from '../../functions/BAIContainerButtons';

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

  jQuery = () => {
    BAIContainerButtons({ marketday: this.state.marketday });
  };

  componentDidMount() {
    Promise.all([this.ValburyData(), this.jQuery()]);
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
      DataTradeClean(jQuery);
      MarketBadgesClean(jQuery);
      $("#status-signal").hide();
      $("#status-market").addClass("text-bg-dark");
      $("#status-market").html("XAU/USD");
      $('.valbury-box:first-child').css('background-color', '#272731');
      DataTradeUnavailable(jQuery);
    };

    function MarketWaiting($) {
      DataTradeClean(jQuery);
      MarketBadgesClean(jQuery);
      $("#status-signal").show();
      $("#status-market").addClass("text-bg-light");
      $("#status-market").html("XAU/USD");
      $("#status-signal").html("Waiting");
      $('.valbury-box:first-child').css('background-color', '#272731');
      DataTradeUnavailable(jQuery);
    };

    function MarketOpen($) {
      DataTradeClean(jQuery);
      MarketBadgesClean(jQuery);
      $("#status-market").addClass("text-bg-success");
      $("#status-market").html("XAU/USD");
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
      DataTradeClean(jQuery);
      MarketBadgesClean(jQuery);
      $("#status-signal").hide();
      $("#status-market").addClass("text-bg-dark");
      $("#status-market").html("XAU/USD");
      $('.valbury-box:first-child').css('background-color', '#272731');
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
              <a role='button' onClick={goldSlider} className='vaf-slide-button gold active'></a>
              <a role='button' onClick={crudeSlider} className='vaf-slide-button crude'></a>
              <a role='button' onClick={yenSlider} className='vaf-slide-button yen'></a>
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
            <div className='ordering-badges-valbury-mobile d-flex flex-column align-items-end'>
              <span id="status-market" className="badge text-bg-secondary badge-fit-content mt-2">Status Market</span>
              <span id="status-signal" className="badge text-bg-secondary badge-fit-content mt-2">Status Signal</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}