import $ from 'jquery';
import {
  setFotoPosition, setTopFullscreen, toggleMobileMenu, hideMobileMenuForDesktop,
  hideMobileMenuOnClick, setContactPosition, toggleLangDropdown, hideLangDropdownOutsideClick
} from 'js/layout';
import { translateOnInit, translateOnClick } from 'js/lang';
import debounce from 'js/utils';

require('css/main.scss');

window.jQuery = $; window.$ = $;

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
  }, 50));
});
