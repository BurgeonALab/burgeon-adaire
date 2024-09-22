import React, { Component, Fragment } from 'react';
import moment from 'moment';
import $ from 'jquery';

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

  jQuery = () => {
    var windowWidth = $(window).width();
    var initiateOrder = this.state.valburysignal;
    var countOrder = initiateOrder.length;
    var setdate = new Date(Date(this.state.marketday));
    var dayorder = moment(setdate).locale('id').format('dddd');

    if (windowWidth <= 768) {
      var varvafFirst = 'still';
      var varvafSecond = 'still';
      var orderdata = 'still';
      var firstvaf = 'still';

      function ShowVafDetailFirst($) {
        $('.valbury-box:nth-child(1)').removeClass('width-20-percent');
        $('.valbury-box:nth-child(1)').addClass('width-80-percent');
        $('.valbury-box:nth-child(2)').removeClass('width-80-percent');
        $('.valbury-box:nth-child(2)').addClass('width-20-percent');
        if (windowWidth <= 390) {
          $('.vaf-slide-container').css('margin-top', '24px');
          $('.signal-order-box-custom').css('margin-top', '220px');
          $('.valbury-box-container-mobile h5').hide();
          $('#status-message-mobile').hide();
          $('#status-market').hide();
          $('#status-signal').hide();
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
            if (windowWidth <= 768) {
              if (countOrder == undefined || countOrder.length == 0) {
                $('.vaf-slide-container').css('margin-top', '92px');
                $('.signal-order-box-custom').css('margin-top', '');
                $('.valbury-box-container-mobile h5').show();
                $('#status-market').show();
                $('#status-signal').show();
                $('.signal-order-box-custom').hide();
              } else {
                $('.vaf-slide-container').css('margin-top', '92px');
                $('.signal-order-box-custom').css('margin-top', '');
                $('.valbury-box-container-mobile h5').show();
                $('#status-message-mobile').show();
                $('#status-market').show();
                $('#status-signal').show();
                $('.signal-order-box-custom').hide();
              }
              orderdata = 'hide';
            } else {
              $('.signal-order-box-custom').hide();
              orderdata = 'hide';
            }
            if (dayorder === 'Sabtu' || dayorder === 'Minggu') {
              $('#status-signal').hide();
              $('#status-message-mobile').hide();
            }
          } else {
            if (windowWidth <= 390) {
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
          $(this).removeClass('width-80-percent');
          $('.valbury-box:nth-child(2)').removeClass('width-20-percent');
          $('.signal-order-box-custom').hide();
          $('.valbury-box:nth-child(2)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          varvafFirst = 'still';
        } else if (varvafSecond === 'readycollapse') {
          $('.valbury-box:nth-child(2)').addClass('width-20-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
          $('.valbury-box:nth-child(1)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(1)').addClass('width-80-percent');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          varvafFirst = 'readycollapse';
          varvafSecond = 'still';
        }
      }

      function ToogleVafRight($) {
        if (varvafSecond === 'readycollapse') {
          if (orderdata === 'readyhide') {
            if (windowWidth <= 768 || countOrder == undefined || countOrder.length == 0) {
              $('#status-market').show();
              $('#status-signal').show();
              $('.signal-order-box-custom').hide();
            } else {
              $('#status-message-mobile').show();
              $('#status-market').show();
              $('#status-signal').show();
              $('.signal-order-box-custom').hide();
            }
          }
          $('.valbury-box:nth-child(2)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(1)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(1)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          if (dayorder === 'Sabtu' || dayorder === 'Minggu') {
            $('#status-signal').hide();
            $('#status-message-mobile').hide();
          }
          firstvaf = 'still';
          varvafSecond = 'still';
        } else if (varvafFirst === 'readycollapse') {
          $('#status-message-mobile').show();
          $('.vaf-slide-container').css('margin-top', '92px');
          $('.signal-order-box-custom').css('margin-top', '');
          $('.valbury-box-container-mobile h5').show();
          $('.valbury-box:nth-child(1)').addClass('width-20-percent');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
          $('.valbury-box:nth-child(2)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(2)').addClass('width-80-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          firstvaf = 'readyexpand';
          varvafSecond = 'readycollapse';
          varvafFirst = 'still';
        } else {
          $('.valbury-box:nth-child(2)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(2)').addClass('width-80-percent');
          $('.valbury-box:nth-child(1)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(1)').addClass('width-20-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
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
          firstvaf = 'still';
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

    function DataTradeClean($) {
      $(".data-detail-valbury").attr('style', 'display:flex !important');
      $(".data-unavailable-signal").hide().removeClass('data-unavailable');
      $(".signal-order-box-custom").removeClass("data-unavailable-background");
      $(".signal-order-box-custom").removeClass("data-sell-background");
      $(".ordering-badges-valbury-mobile").attr('style', 'justify-content:space-between !important');
    }

    function DataTradeUnavailable($) {
      $(".data-detail-valbury").attr('style', 'display:none !important');
      if (dateday === 'Sabtu' || dateday === 'Minggu') {
        $(".data-closed-signal").show().addClass('data-unavailable');
      } else {
        $(".data-unavailable-signal").show().addClass('data-unavailable');
      }
      $(".signal-order-box-custom").addClass("data-unavailable-background");
      $(".signal-order-box-custom").addClass("data-sell-background");
      $(".ordering-badges-valbury-mobile").attr('style', 'justify-content:flex-end !important');
      if (dateday === 'Sabtu' || dateday === 'Minggu') {
        $('.signal-order-text').hide();
      }
    }

    function MarketBadgesClean($) {
      $("#status-market").removeClass("text-bg-secondary");
      $("#status-market").removeClass("text-bg-dark");
      $("#status-market").removeClass("text-bg-light");
      $("#status-market").removeClass("text-bg-warning");
      $("#status-market").removeClass("text-bg-primary");
    }

    function BadgeWarning($) {
      $("#status-signal").show();
      $("#status-signal").removeClass("text-bg-secondary");
      $("#status-signal").html("Expired");
      $("#status-signal").addClass("text-bg-danger");
    }

    function BadgeActive($) {
      $("#status-signal").show();
      $("#status-signal").removeClass("text-bg-secondary");
      $("#status-signal").html("Active");
      $("#status-signal").addClass("text-bg-primary");
    }

    $(function () {
      var windowValbury = $(window).width();
      if (valorder == undefined) {
        DataTradeClean(jQuery);
        if (dateday === 'Sabtu' || dateday === 'Minggu') {
          DataTradeClean(jQuery);
          MarketBadgesClean(jQuery);
          $("#status-signal").show();
          $('.valbury-box:first-child').css('background-color', '#272731');
          $("#status-market").html("XAU/USD");
          $("#status-market").addClass("text-bg-dark");
          $("#status-signal").hide();
          DataTradeUnavailable(jQuery);
        } else {
          DataTradeClean(jQuery);
          MarketBadgesClean(jQuery);
          $("#status-signal").show();
          $('.valbury-box:first-child').css('background-color', '#272731');
          $("#status-market").html("XAU/USD");
          $("#status-market").addClass("text-bg-light");
          $("#status-signal").html("Waiting");
          DataTradeUnavailable(jQuery);
        }
      } else {
        if (dateday === 'Senin' || dateday === 'Selasa' || dateday === 'Rabu' || dateday === 'Kamis' || dateday === 'Jumat') {
          DataTradeClean(jQuery);
          MarketBadgesClean(jQuery);
          $("#status-market").html("XAU/USD");
          $("#status-market").addClass("text-bg-success");
          if (windowValbury <= 768) {
            if (valorder == undefined) {
              $("#status-message-mobile").hide();
            } else {
              $("#status-message-mobile").show();
            }
          } else if (windowValbury >= 768) {
            $("#status-message").show();
          }
          if (valorder === 'buy') {
            DataTradeClean(jQuery);
            if (valorderDate != datedayDate) {
              BadgeWarning(jQuery);
            } else {
              BadgeActive(jQuery);
            }
            $('.valbury-box:first-child').css('background-color', '#1F4B8A');
          } else if (valorder === 'sell') {
            DataTradeClean(jQuery);
            if (valorderDate != datedayDate) {
              BadgeWarning(jQuery);
            } else {
              BadgeActive(jQuery);
            }
            $('.valbury-box:first-child').css('background-color', '#A32525');
            $(".signal-order-box-custom").addClass("data-sell-background");
          }
        } else {
          DataTradeClean(jQuery);
          MarketBadgesClean(jQuery);
          $("#status-signal").show();
          $('.valbury-box:first-child').css('background-color', '#272731');
          $("#status-market").html("XAU/USD");
          $("#status-market").addClass("text-bg-dark");
          $("#status-signal").hide();
          DataTradeUnavailable(jQuery);
        }
      }
    });

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
                    <p className='signal-order-description mb-0 text-start fw-medium my-1 text-light'>&nbsp;{this.state.valburysignal.price}</p>
                    <p className='signal-order-description mb-0 text-start fw-medium my-1 text-light'>&nbsp;{this.state.valburysignal.stoploss}</p>
                    <p className='signal-order-description mb-0 text-start fw-medium my-1 text-light'>&nbsp;{this.state.valburysignal.takeprofit1}</p>
                    <p className='signal-order-description mb-0 text-start fw-medium my-1 text-light'>&nbsp;{this.state.valburysignal.takeprofit2}</p>
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
        <div className='valbury-box h-50 rounded p-4'>
          <div className='valbury-box-container-mobile d-flex h-100 flex-column justify-content-between'>
            <h5 className='text-light'>Economic News</h5>
            <div className='d-flex flex-column align-items-end'>
              <span className="badge badge-danger text-bg-danger badge-fit-content mt-2">WIP</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}