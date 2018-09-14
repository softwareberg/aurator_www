import $ from 'jquery';

export function setFotoPosition() {
  const firmaBg = $('.firma__bg');
  const firmaBgHeight = firmaBg.height();
  const quoteHeight = $('.firma__quote-div').outerHeight();
  const firma = $('.firma');
  const breakpoint = 768;

  if (window.innerWidth >= breakpoint) {
    const maxTopHeight = 7 / 15 * firmaBgHeight;
    const firmaBgTop = quoteHeight < maxTopHeight ? quoteHeight : maxTopHeight;
    firmaBg.css({ top: `${-firmaBgTop}px` });
    firma.css({ height: `${firmaBgHeight}px` });
  } else {
    firmaBg.css({ top: '' });
    firma.css({ height: '' });
  }
}

export function setTopFullscreen() {
  $('.top').css('height', window.innerHeight);
}

export function toggleMobileMenu() {
  $('.menu-toggle').click(() => {
    $('.nav-mobile').toggleClass('h-open');
    $('.menu-toggle').toggleClass('h-open');
  });
}

export function hideMobileMenuForDesktop() {
  const breakpointDesktop = 992;
  if (window.innerWidth >= breakpointDesktop) {
    // on resize of a window reset state of mobile menu
    $('.nav-mobile').removeClass('h-open');
    $('.menu-toggle').removeClass('h-open');
  }
}
