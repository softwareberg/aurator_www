import $ from 'jquery';

export function setFotoPosition() {
  const aboutBg = $('.about__bg');
  const aboutBgHeight = aboutBg.height();
  const quoteHeight = $('.c-quote').outerHeight();
  const about = $('.about');
  const breakpoint = 768;

  if (window.innerWidth >= breakpoint) {
    const maxTopHeight = 7 / 15 * aboutBgHeight;
    const aboutBgTop = quoteHeight < maxTopHeight ? quoteHeight : maxTopHeight;
    aboutBg.css({ top: `${-aboutBgTop}px` });
    about.css({ height: `${aboutBgHeight}px` });
  } else {
    aboutBg.css({ top: '' });
    about.css({ height: '' });
  }
}

export function setTopFullscreen() {
  $('.top').css('height', window.innerHeight);
}

export function toggleMobileMenu() {
  $('.c-menu__toggle').click(() => {
    $('.c-nav-mobile').toggleClass('h-open');
    $('.c-menu__toggle').toggleClass('h-open');
  });
}

export function hideMobileMenuForDesktop() {
  const breakpointDesktop = 992;
  if (window.innerWidth >= breakpointDesktop) {
    // for desktop widths reset state of mobile menu
    $('.c-nav-mobile').removeClass('h-open');
    $('.c-menu__toggle').removeClass('h-open');
  }
}

export function hideMobileMenuOnClick() {
  // reset state of mobile menu after clicking link from mobile menu
  $('.js-hideMobileMenu').click(() => {
    $('.c-nav-mobile').removeClass('h-open');
    $('.c-menu__toggle').removeClass('h-open');
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
    $('.c-lang__dd').toggleClass('d-none');
  });
}

export function hideLangDropdownOutsideClick() {
  // hide dropdown with language selection when clicked outside the dropdown
  $(document).click((event) => {
    if (!$(event.target).closest('.c-lang').length) {
      if ($('.c-lang').is(':visible')) {
        $('.c-lang__icon').removeClass('d-none');
        $('.c-lang__icon-hide').addClass('d-none');
        $('.c-lang__dd').addClass('d-none');
      }
    }
  });
}

export function setFormFullscreen() {
  if ($('.c-form').height() < $(window).height()) {
    $('.c-form').css('height', $(window).height());
  } else {
    $('.c-form').css('height', '');
  }
}

export function showContactFormOnClick() {
  $('.js-openContactForm').click(() => {
    $('.js-contactForm').addClass('h-open');
  });
}

export function showPhoneFormOnClick() {
  $('.js-openPhoneForm').click(() => {
    $('.js-phoneForm').addClass('h-open');
  });
}

export function hideFormOnClick() {
  $('.js-hideForm').click(() => {
    $('.l-form-container').removeClass('h-open');
  });
}

export function hideAlertOnClick() {
  const cookieAuratorAccepted = localStorage.getItem('cookieAuratorAccepted');
  if (cookieAuratorAccepted === 'true') {
    $('.c-alert').addClass('d-none');
  } else {
    $('.js-hideAlert').click(() => {
      $('.c-alert').addClass('d-none');
      localStorage.setItem('cookieAuratorAccepted', 'true');
    });
  }
}
