import $ from 'jquery';
import {
  setFotoPosition, setTopFullscreen, toggleMobileMenu, hideMobileMenuForDesktop,
  hideMobileMenuOnClick, setContactPosition, toggleLangDropdown, hideLangDropdownOutsideClick,
  setFormFullscreen, showContactFormOnClick, showPhoneFormOnClick, hideFormOnClick, hideAlertOnClick
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
  setFormFullscreen();
  showContactFormOnClick();
  showPhoneFormOnClick();
  hideFormOnClick();
  hideAlertOnClick();

  $(window).on('resize', debounce(() => {
    setTopFullscreen();
    setFotoPosition();
    hideMobileMenuForDesktop();
    setContactPosition();
    setFormFullscreen();
  }, 50));
});
