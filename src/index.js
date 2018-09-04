import $ from 'jquery';
import { setHeights, resetHeights, setPositionForeground } from 'js/layout';

require('css/main.scss');

window.jQuery = $; window.$ = $;

const breakpointDesktop = 992;
const yearFounded = 2008;

$(document).ready(() => {
  const yearNow = (new Date()).getFullYear();
  $('.js-doswiadczenie__x-lat').html(`${yearNow - yearFounded} lat doświadczenia`);
  $('.top').css('height', window.innerHeight);
  setTimeout(() => setPositionForeground(), 500);
  // setPositionFoto();
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
    $('.top').css('height', window.innerHeight);
    setPositionForeground();
    // setPositionFoto();
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
