import React, { Component, Fragment } from 'react';
import moment from 'moment';
import "moment/locale/id";
import $ from 'jquery';
import { BAIContainerButtons } from '../../functions/BAIContainerButtons';

export default class BSmallValbury extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xauusd: [],
      clr: [],
      usdjpy: [],
      marketday: "",
      VSLoaded: false,
      DateLoaded: false,
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

    const LatestSignal = async () => {
      await fetch('https://api.burgeonadaire.com/vaf-dailybulletin')
        .then(async response => await response.json())
        .then((data) => {
          this.setState({
            xauusd: data['document']['xauusd_signals'].pop(),
            clr: data['document']['clr_signals'].pop(),
            usdjpy: data['document']['usdjpy_signals'].pop(),
            VSLoaded: true,
          });
        })
        .catch(error => {
          error = "Signal: No Data"
          console.log(error);
        });
    };

    Promise.all([TimeData(), LatestSignal()]);
  };

  jQuery = () => {
    BAIContainerButtons({ marketday: this.state.marketday });
  };

  componentDidMount() {
    Promise.all([this.ValburyData(), this.jQuery()]);
  }

  render() {
    var valorder = this.state.xauusd.order;
    var dateraw = new Date(Date(this.state.marketday));
    var dateday = moment(dateraw).locale('id').format('dddd');
    var valorderDate = moment(new Date((this.state.xauusd.date))).locale('id').format('ll');
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
        $('#status-signal').hide();
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
      const goldData = this.state.xauusd;

      if (goldData.length == 0 || goldData == undefined) {
        console.log("Couldn't Fetch XAU/USD Data.");
      } else {
        $('.vaf-slide-button.yen').removeClass('active');
        $('.vaf-slide-button.crude').removeClass('active');
        $('.vaf-slide-button.gold').addClass('active');
        $("#status-market").html("XAU/USD");
        $("#signal-order").html(goldData.order);

        $("#signal-price").html(goldData.price);
        $("#signal-price").prepend('&nbsp;');

        $("#signal-sl").html(goldData.stoploss);
        $("#signal-sl").prepend('&nbsp;');

        $("#signal-tp1").html(goldData.takeprofit1);
        $("#signal-tp1").prepend('&nbsp;');

        $("#signal-tp2").html(goldData.takeprofit2);
        $("#signal-tp2").prepend('&nbsp;');

        if (goldData.order === 'sell') {
          $(".signal-order-box-custom").addClass("data-sell-background");
          $('.valbury-box:first-child').css('background-color', '#A32525');
        } else if (goldData.order === 'buy') {
          $(".signal-order-box-custom").removeClass("data-sell-background");
          $('.valbury-box:first-child').css('background-color', '#1F4B8A');
        }
      }
    }

    const crudeSlider = () => {
      const crudeData = this.state.clr;

      if (crudeData.length == 0 || crudeData == undefined) {
        console.log("Couldn't Fetch CLR Data.");
      } else {
        $('.vaf-slide-button.gold').removeClass('active');
        $('.vaf-slide-button.yen').removeClass('active');
        $('.vaf-slide-button.crude').addClass('active');
        $("#status-market").html("CLR");
        $("#signal-order").html(crudeData.order);

        $("#signal-price").html(crudeData.price);
        $("#signal-price").prepend('&nbsp;');

        $("#signal-sl").html(crudeData.stoploss);
        $("#signal-sl").prepend('&nbsp;');

        $("#signal-tp1").html(crudeData.takeprofit1);
        $("#signal-tp1").prepend('&nbsp;');

        $("#signal-tp2").html(crudeData.takeprofit2);
        $("#signal-tp2").prepend('&nbsp;');

        if (crudeData.order === 'sell') {
          $(".signal-order-box-custom").addClass("data-sell-background");
          $('.valbury-box:first-child').css('background-color', '#A32525');
        } else if (crudeData.order === 'buy') {
          $(".signal-order-box-custom").removeClass("data-sell-background");
          $('.valbury-box:first-child').css('background-color', '#1F4B8A');
        }
      }
    }

    const yenSlider = () => {
      const yenData = this.state.usdjpy;

      if (yenData.length == 0 || yenData == undefined) {
        console.log("Couldn't Fetch USD/JPY Data.");
      } else {
        $('.vaf-slide-button.gold').removeClass('active');
        $('.vaf-slide-button.crude').removeClass('active');
        $('.vaf-slide-button.yen').addClass('active');
        $("#status-market").html("USD/JPY");
        $("#signal-order").html(yenData.order);

        $("#signal-price").html(yenData.price);
        $("#signal-price").prepend('&nbsp;');

        $("#signal-sl").html(yenData.stoploss);
        $("#signal-sl").prepend('&nbsp;');

        $("#signal-tp1").html(yenData.takeprofit1);
        $("#signal-tp1").prepend('&nbsp;');

        $("#signal-tp2").html(yenData.takeprofit2);
        $("#signal-tp2").prepend('&nbsp;');

        if (yenData.order === 'sell') {
          $(".signal-order-box-custom").addClass("data-sell-background");
          $('.valbury-box:first-child').css('background-color', '#A32525');
        } else if (yenData.order === 'buy') {
          $(".signal-order-box-custom").removeClass("data-sell-background");
          $('.valbury-box:first-child').css('background-color', '#1F4B8A');
        }
      }
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
                <p id="signal-order" className='signal-order-text text-light text-end fw-bold mb-0'>{this.state.xauusd.order}</p>
                <div className='d-flex flex-row data-detail-valbury'>
                  <div className='flex-grow-1'>
                    <p className='signal-order-description mb-0 text-end fw-bold my-1 text-light'>Price:</p>
                    <p className='signal-order-description mb-0 text-end fw-bold my-1 text-light'>Stop Loss:</p>
                    <p className='signal-order-description mb-0 text-end fw-bold my-1 text-light'>Take Profit 1:</p>
                    <p className='signal-order-description mb-0 text-end fw-bold my-1 text-light'>Take Profit 2:</p>
                  </div>
                  <div>
                    <p id="signal-price" className='signal-order-description mb-0 text-end fw-medium my-1 text-light'>&nbsp;{this.state.xauusd.price}</p>
                    <p id="signal-sl" className='signal-order-description mb-0 text-end fw-medium my-1 text-light'>&nbsp;{this.state.xauusd.stoploss}</p>
                    <p id="signal-tp1" className='signal-order-description mb-0 text-end fw-medium my-1 text-light'>&nbsp;{this.state.xauusd.takeprofit1}</p>
                    <p id="signal-tp2" className='signal-order-description mb-0 text-end fw-medium my-1 text-light'>&nbsp;{this.state.xauusd.takeprofit2}</p>
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