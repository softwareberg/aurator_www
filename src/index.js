import $ from 'jquery';
import { setFotoHeight } from 'js/layout';

require('css/main.scss');

window.jQuery = $; window.$ = $;

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

  $(window).resize(() => {
    $('.top').css('height', window.innerHeight);
    setFotoHeight();
  });
});
