import moment from 'moment';
import "moment/locale/id";
import $ from 'jquery';

export function BAIContainerButtons(props) {
  var windowWidth = $(window).width();
  var setdate = new Date(Date(props.marketday));
  var dayorder = moment(setdate).locale('id').format('dddd');
  var daytime = moment(setdate).locale('id').format('HH:mm:ss').toString();
  var dayopen = '05:00:00';

  if (windowWidth <= 768) {
    var varvafFirst = 'still';
    var varvafSecond = 'still';
    var orderdata = 'still';
    var firstvaf = 'still';

    function ShowVafDetailFirst($) {
      console.log('ShowVafDetailFirst');

      $('.news-title').hide();
      $('.news-title-mobile-expanded').hide();
      $('.valbury-box:nth-child(1)').removeClass('width-20-percent');
      $('.valbury-box:nth-child(2)').removeClass('width-80-percent');
      $('.valbury-box:nth-child(1)').addClass('width-80-percent');
      $('.valbury-box:nth-child(2)').addClass('width-20-percent');
      if (windowWidth <= 450) {
        console.log('ShowVafDetailFirst: windowWidth');

        $('.valbury-box-container-mobile h5').hide();
        $('#status-market').hide();
        $('#status-signal').hide();
        $('.signal-order-box-custom').show();
        $('.vaf-slide-container').css('margin-top', '24px');
        $('.signal-order-box-custom').css('margin-top', '220px');
      } else {
        $('.signal-order-box-custom').show();
      }
      $('.valbury-box:nth-child(1) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
      $('.news-content-detail').addClass('valbury-box-container-mobile-hide');
      varvafFirst = 'readycollapse';
      orderdata = 'readyhide';
    }

    function HideVafDetailFirst($) {
      console.log('HideVafDetailFirst');

      if (varvafFirst === 'readycollapse') {
        console.log('HideVafDetailFirst: varvafFirst readycollapse');

        if (orderdata === 'readyhide') {
          console.log('HideVafDetailFirst: orderdata readyhide');

          if ($('.data-unavailable-signal').is(':hidden')) {
            $('.signal-order-box-custom').hide();
            $('.valbury-box-container-mobile h5').show();
            $('#status-market').show();
            $('#status-signal').show();
            $('.vaf-slide-container').css('margin-top', '92px');
            $('.signal-order-box-custom').css('margin-top', '');
          } else {
            $('.signal-order-box-custom').hide();
            $('.valbury-box-container-mobile h5').show();
            $('#status-market').show();
            $('#status-signal').show();
            $('.vaf-slide-container').css('margin-top', '92px');
            $('.signal-order-box-custom').css('margin-top', '');
          }
          $('.signal-order-box-custom').hide();
          $('.news-title').hide();
          $('.news-title-mobile-expanded').hide();
          orderdata = 'hide';
          if (dayorder === 'Sabtu' || dayorder === 'Minggu' || dayorder === 'Senin' && daytime <= dayopen) {
            $('#status-signal').hide();
          }
        } else {
          if (windowWidth <= 450) {
            console.log("HideVafDetailFirst: windowWidth");

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
        $('.news-content-detail').removeClass('valbury-box-container-mobile-hide');
        varvafFirst = 'still';
      } else if (varvafSecond === 'readycollapse') {
        console.log("HideVafDetailFirst: varvafSecond readycollapse");

        $('.valbury-box:nth-child(1)').removeClass('width-20-percent');
        $('.valbury-box:nth-child(1) .valbury-box-container-mobile').removeClass('valbury-box-container-mobile-hide');
        $('.valbury-box:nth-child(2)').addClass('width-20-percent');
        $('.valbury-box:nth-child(1)').addClass('width-80-percent');
        $('.news-content-detail').addClass('valbury-box-container-mobile-hide');
        varvafFirst = 'readycollapse';
        varvafSecond = 'still';
      }
    }

    function ToogleVafRight($) {
      console.log('ToogleVafRight');
      if (varvafSecond === 'readycollapse') {
        console.log("ToggleVafRight: varvafSecond readycollapse");

        if (orderdata === 'readyhide') {
          console.log("ToggleVafRight: orderdata readyhide");

          if (windowWidth <= 768 || $('.data-unavailable-signal').is(':visible')) {
            console.log("ToggleVafRight: windowWidth");

            $('.signal-order-box-custom').hide();
            $('#status-market').show();
            $('#status-signal').show();
          } else {
            $('.signal-order-box-custom').hide();
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
        }
        $('.news-title-mobile-expanded').hide();
        $('.news-title-mobile').show();
        firstvaf = 'still';
        varvafSecond = 'still';
      } else if (varvafFirst === 'readycollapse') {
        console.log("ToogleVafRight: varvafFirst readycollapse");

        $('.valbury-box-container-mobile h5').show();
        $('.news-title-mobile-expanded').show();
        // Hide
        $('.news-title').hide();
        $('.news-title-mobile').hide();
        // End Hide
        $('.valbury-box:nth-child(2)').removeClass('width-20-percent');
        $('.news-content-detail').removeClass('valbury-box-container-mobile-hide');
        $('.valbury-box:nth-child(1)').addClass('width-20-percent');
        $('.valbury-box:nth-child(1) .valbury-box-container-mobile').addClass('valbury-box-container-mobile-hide');
        $('.valbury-box:nth-child(2)').addClass('width-80-percent');
        $('.vaf-slide-container').css('margin-top', '92px');
        $('.signal-order-box-custom').css('margin-top', '');
        firstvaf = 'readyexpand';
        varvafSecond = 'readycollapse';
        varvafFirst = 'still';
      } else {
        console.log("ToogleVafRight: Base");

        $('.news-title').hide();
        $('.news-title-mobile').hide();
        $('.news-title-mobile-expanded').show();
        $('.valbury-box:nth-child(2)').removeClass('width-20-percent');
        $('.valbury-box:nth-child(1)').removeClass('width-80-percent');
        $('.news-content-detail').removeClass('valbury-box-container-mobile-hide');
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

    $('.valbury-news').on("click", function () {
      ToogleVafRight(jQuery);
    });
  };
}
