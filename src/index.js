import $ from 'jquery';
import {
  setFotoPosition, setTopFullscreen, toggleMobileMenu, hideMobileMenuForDesktop,
  hideMobileMenuOnClick, setContactPosition, toggleLangDropdown, hideLangDropdownOutsideClick
} from 'js/layout';
import { translateOnInit, translateOnClick } from 'js/lang';

require('css/main.scss');

window.jQuery = $; window.$ = $;

function debounce(fn, delay) {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

$(document).ready(() => {
  translateOnInit();
  setTopFullscreen();
  setTimeout(() => setFotoPosition(), 500);
  toggleMobileMenu();
  hideMobileMenuOnClick();
  setContactPosition();
  toggleLangDropdown();
  hideLangDropdownOutsideClick();
  translateOnClick();

  $(window).on('resize', debounce(() => {
    setTopFullscreen();
    setFotoPosition();
    hideMobileMenuForDesktop();
    setContactPosition();
  }, 150));
});
