import $ from 'jquery';
import {
  setFotoPosition, setTopFullscreen, toggleMobileMenu, hideMobileMenuForDesktop,
  hideMobileMenuOnClick, setContactPosition, toggleLangDropdown, hideLangDropdownOutsideClick
} from 'js/layout';
import { translateOnInit, translateOnClick } from 'js/lang';

import setYearsExperience from 'js/auxiliary';

require('css/main.scss');

window.jQuery = $; window.$ = $;

$(document).ready(() => {
  translateOnInit();
  setTopFullscreen();
  setTimeout(() => setFotoPosition(), 500);
  setYearsExperience();
  toggleMobileMenu();
  hideMobileMenuOnClick();
  setContactPosition();
  toggleLangDropdown();
  hideLangDropdownOutsideClick();
  translateOnClick();

  $(window).resize(() => {
    setTopFullscreen();
    setFotoPosition();
    hideMobileMenuForDesktop();
    setContactPosition();
  });
});
