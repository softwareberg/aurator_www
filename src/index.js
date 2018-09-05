import $ from 'jquery';
import {
  setHeightsDesktop, setHeightsAll, resetHeights, setFotoHeight
} from 'js/layout';

require('css/main.scss');

window.jQuery = $; window.$ = $;

const breakpointDesktop = 992;
const yearFounded = 2008;

$(document).ready(() => {
  $('.top').css('height', window.innerHeight);
  setTimeout(() => setFotoHeight(), 500);
  const yearNow = (new Date()).getFullYear();
  // set experience time under the logo in 'Doswiadczenie' section
  $('.js-doswiadczenie__x-lat').html(`${yearNow - yearFounded} lat doświadczenia`);
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
    $('.top').css('height', window.innerHeight);
    setFotoHeight();
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
  });
});
