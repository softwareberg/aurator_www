import $ from 'jquery';
import { setHeights, resetHeights } from 'js/adjustHeights';

require('css/main.scss');

window.jQuery = $; window.$ = $;

const breakpointDesktop = 992;

$(document).ready(() => {
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
    } else {
      // for smaller screens reset heights of the elements to default
      resetHeights();
    }
  });
});
