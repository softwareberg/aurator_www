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
    // for desktop widths reset state of mobile menu
    $('.nav-mobile').removeClass('h-open');
    $('.menu-toggle').removeClass('h-open');
  }
}

export function hideMobileMenuOnClick() {
  // reset state of mobile menu after clicking link from mobile menu
  $('.js-hideMobileMenu').click(() => {
    $('.nav-mobile').removeClass('h-open');
    $('.menu-toggle').removeClass('h-open');
  });
}

export function setContactPosition() {
  const breakpointDesktop = 768;
  if (window.innerWidth >= breakpointDesktop) {
    // for MD widths and above- position contact inside the map
    $('.c-contact').addClass('l-center-y');
  } else {
    // below MD width- position contact below the map
    $('.c-contact').removeClass('l-center-y');
  }
}

export function toggleLangDropdown() {
  // show / hide dropdown with language selection
  $('.c-lang__toggle').click(() => {
    $('.c-lang__icon').toggleClass('d-none');
    $('.c-lang__icon-hide').toggleClass('d-none');
    $('.c-lang__dd').toggleClass('h-show');
  });
}

export function hideLangDropdownOutsideClick() {
  // hide dropdown with language selection when clicked outside
  $('.c-lang').on('focusout', () => {
    $('.c-lang__icon').removeClass('d-none');
    $('.c-lang__icon-hide').addClass('d-none');
    $('.c-lang__dd').removeClass('h-show');
  });
}
