import React, { Component } from 'react';
import moment from 'moment';
import $ from 'jquery';

export default class BSmallValbury extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valburysignal: {},
      marketday: "",
      VSLoaded: false,
      DateLoaded: false,
    };
  }

  ValburyData = () => {
    fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia%2FJakarta')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          marketday: data['dateTime'],
          DateLoaded: true,
        });
      })
      .catch(error => {
        console.log('Date: No Data');
      });

    fetch('https://api.burgeonadaire.com/valbury-bulletin')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          valburysignal: data['document']['xauusd_signals'].pop(),
          VSLoaded: true,
        });
      })
      .catch(error => {
        console.log('Signal: No Data');
      });
  }

  jQuery = () => {
    var windowWidth = $(window).width();
    var countOrder = this.state.valburysignal;

    $('#overlay-hide-toggle').on("click", function () {
      $('.operation-container-overlay').toggleClass("width-70");
      $('.overlay-button').toggleClass("rotate-overlay-button");
      $('.overlay-content').toggleClass("hide-section");
      $('.operation-container-overlay-container').toggleClass("pointer-events-none");
      $('.operation-container-overlay').toggleClass("pointer-events-auto");
    });

    $('#overlay-hide-mobile-toggle').on("click", function () {
      $('.overlay-mobile-button').toggleClass("rotate-overlay-mobile-button");
      $('.hide-mobile-overlay-content').toggleClass("hide-section");
      $('.overlay-container-mobile-box').toggleClass("height-70");
      $('.overlay-container-mobile-box').toggleClass("width-70");
      $('.overlay-container-mobile-box').toggleClass("border-radius-conditional-click");
      $('.overlay-container-mobile').toggleClass("padding-left-conditional-click");
      $('.valbury-container-mobile').toggleClass("margin-top-conditional-click");
      $('.outro-container').toggleClass("margin-top-conditional-click");
      $('.overlay-container-mobile').toggleClass('pointer-events-none');
      $('.overlay-container-mobile-box').toggleClass("pointer-events-auto");
    });

    if (windowWidth <= 768) {
      var varvafFirst = 'still';
      var varvafSecond = 'still';
      var orderdata = 'still';
      $('.valbury-box:nth-child(1)').on("click", function () {
        if (varvafFirst === 'readycollapse') {
          if (orderdata === 'readyhide') {
            if (windowWidth <= 390) {
              if (countOrder == undefined) {
                $('#status-market').show();
                $('#status-signal').show();
                $('.signal-order-box-custom').hide();
              } else {
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
        } else {
          $(this).removeClass('width-20-percent');
          $(this).addClass('width-80-percent');
          $('.valbury-box:nth-child(2)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(2)').addClass('width-20-percent');
          if (windowWidth <= 390) {
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
      });
      $('.valbury-box:nth-child(2)').on("click", function () {
        if (varvafSecond === 'readycollapse') {
          if (orderdata === 'readyhide') {
            if (windowWidth <= 768 || countOrder == undefined) {
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
          $(this).removeClass('width-80-percent');
          $('.valbury-box:nth-child(1)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(1)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          varvafSecond = 'still';
        } else if (varvafFirst === 'readycollapse') {
          $('.valbury-box:nth-child(1)').addClass('width-20-percent');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
          $('.valbury-box:nth-child(2)').removeClass('width-20-percent');
          $('.valbury-box:nth-child(2)').addClass('width-80-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          varvafSecond = 'readycollapse';
          varvafFirst = 'still';
        } else {
          $(this).removeClass('width-20-percent');
          $(this).addClass('width-80-percent');
          $('.valbury-box:nth-child(1)').removeClass('width-80-percent');
          $('.valbury-box:nth-child(1)').addClass('width-20-percent');
          $('.valbury-box:nth-child(2) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
          $('.valbury-box:nth-child(1) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
          varvafSecond = 'readycollapse';
        }
      });
    }
  }
  componentDidMount() {
    this.ValburyData();
    this.jQuery();
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
      $(".data-unavailable-signal").show().addClass('data-unavailable');
      $(".signal-order-box-custom").addClass("data-unavailable-background");
      $(".signal-order-box-custom").addClass("data-sell-background");
      $(".ordering-badges-valbury-mobile").attr('style', 'justify-content:flex-end !important');
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
          $("#status-signal").show();
          $('.valbury-box:first-child').css('background-color', '#272731');
          MarketBadgesClean(jQuery);
          $("#status-market").html("XAU/USD");
          $("#status-market").addClass("text-bg-dark");
          $("#status-signal").hide();
        } else {
          DataTradeClean(jQuery);
          $("#status-signal").show();
          $('.valbury-box:first-child').css('background-color', '#272731');
          MarketBadgesClean(jQuery);
          $("#status-market").html("XAU/USD");
          DataTradeUnavailable(jQuery);
          $("#status-market").addClass("text-bg-light");
          $("#status-signal").html("Waiting");
        }
      } else {
        if (dateday === 'Senin' || dateday === 'Selasa' || dateday === 'Rabu' || dateday === 'Kamis' || dateday === 'Jumat') {
          DataTradeClean(jQuery);
          $("#status-market").html("XAU/USD");
          MarketBadgesClean(jQuery);
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
          $("#status-signal").show();
          $('.valbury-box:first-child').css('background-color', '#272731');
          MarketBadgesClean(jQuery);
          $("#status-market").html("XAU/USD");
          $("#status-market").addClass("text-bg-dark");
          $("#status-signal").hide();
        }
      }
    });

    return (
      <div className='valbury-box h-50 rounded p-4 position-relative'>
        <div className='valbury-box-container-mobile h-100 d-flex flex-column justify-content-between'>
          <h5 className='text-light'>VAF Trading Suggestions</h5>
          <div className='d-flex flex-column justify-content-center'>
            <div className='signal-order-box-custom'>
              <p className='data-unavailable-signal mb-0'>Data Unavailable</p>
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
            <div className='d-flex flex-column align-items-end'>
              <span id="status-market" className="badge text-bg-secondary badge-fit-content mt-2">Status Market</span>
              <span id="status-signal" className="badge text-bg-secondary badge-fit-content mt-2">Status Signal</span>
            </div>
            <span id="status-message-mobile" className="badge text-bg-warning badge-fit-content mt-2">Be Wisely</span>
          </div>
        </div>
      </div>
    );
  }
}