import $ from 'jquery';
import {
  setFotoPosition, setTopFullscreen, toggleMobileMenu, hideMobileMenuForDesktop
} from 'js/layout';

import setYearsExperience from 'js/pomocnik';

require('css/main.scss');

window.jQuery = $; window.$ = $;

$(document).ready(() => {
  setTopFullscreen();
  setTimeout(() => setFotoPosition(), 500);
  setYearsExperience();
  toggleMobileMenu();

  $(window).resize(() => {
    setTopFullscreen();
    setFotoPosition();
    hideMobileMenuForDesktop();
  });
});
