import $ from 'jquery';
import { setHeights, resetHeights } from 'js/adjustHeights';

require('css/main.scss');

window.jQuery = $; window.$ = $;

const breakpointDesktop = 992;

$(document).ready(() => {
  $('.menu-toggle').click(() => {
    $('.nav-mobile').toggleClass('h-open');
    $('.menu-toggle').toggleClass('h-open');
  });

  if (window.innerWidth >= breakpointDesktop) {
    // for development purposes only:
    setTimeout(() => setHeights(), 500);
    // for production purposes:
    // setHeights();
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth >= breakpointDesktop) {
      // on resize of a window adjust heights of mirrored elements
      setHeights();
      // on resize of a window reset state of mobile menu
      $('.nav-mobile').removeClass('h-open');
      $('.menu-toggle').removeClass('h-open');
    } else {
      // for smaller screens reset heights of the elements to default
      resetHeights();
    }
  });
});
