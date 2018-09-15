import $ from 'jquery';
import {
  setFotoPosition, setTopFullscreen, toggleMobileMenu, hideMobileMenuForDesktop,
  hideMobileMenuOnClick, setContactPosition
} from 'js/layout';

import setYearsExperience from 'js/auxiliary';

require('css/main.scss');

window.jQuery = $; window.$ = $;

$(document).ready(() => {
  setTopFullscreen();
  setTimeout(() => setFotoPosition(), 500);
  setYearsExperience();
  toggleMobileMenu();
  hideMobileMenuOnClick();
  setContactPosition();

  $(window).resize(() => {
    setTopFullscreen();
    setFotoPosition();
    hideMobileMenuForDesktop();
    setContactPosition();
  });
});
