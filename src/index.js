import $ from 'jquery';
import { setHeightsDesktop, setHeightsAll, resetHeights } from 'js/adjustHeights';

require('css/main.scss');

window.jQuery = $; window.$ = $;

const breakpointDesktop = 992;

$(document).ready(() => {
  $('.top').css('height', window.innerHeight);
  $('.menu-toggle').click(() => {
    $('.nav-mobile').toggleClass('h-open');
    $('.menu-toggle').toggleClass('h-open');
  });

  // for development purposes only:
  setTimeout(() => setHeightsAll(), 500);
  // for production purposes:
  // setHeightsAll();

  if (window.innerWidth >= breakpointDesktop) {
    // for development purposes only:
    setTimeout(() => setHeightsDesktop(), 500);
    // for production purposes:
    // setHeightsDesktop();
  }

  $(window).resize(() => {
    if (window.innerWidth >= breakpointDesktop) {
      // on resize of a window adjust heights of mirrored elements
      setHeightsDesktop();
      setHeightsAll();
      // on resize of a window reset state of mobile menu
      $('.nav-mobile').removeClass('h-open');
      $('.menu-toggle').removeClass('h-open');
    } else {
      // for smaller screens reset heights of the elements to default
      resetHeights();
    }
    $('.top').css('height', window.innerHeight);
  });
});
