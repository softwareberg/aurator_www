import $ from 'jquery';

export function setPhotoPosition() {
  const aboutBg = $('.about__bg');
  const about = $('.about');
  const breakpoint = 768;

  if (window.innerWidth >= breakpoint) {
    const aboutBgHeight = aboutBg.height();
    const quoteHeight = $('.c-quote').outerHeight();
    const maxTopHeight = 7 / 15 * aboutBgHeight;
    const aboutBgTop = quoteHeight < maxTopHeight ? quoteHeight : maxTopHeight;
    aboutBg.css({ top: `${-aboutBgTop}px` });
    about.css({ height: `${aboutBgHeight}px` });
  } else {
    aboutBg.css({ top: '' });
    about.css({ height: '' });
  }
}

export function setPhotoPositionAfterLoading() {
  const intervalId = setInterval(() => {
    if ($('.about__bg').height()) {
      setPhotoPosition();
      clearInterval(intervalId);
    }
  }, 500);
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
  const cForms = $('.c-form');
  cForms.each((_, cForm) => {
    const cFormPaddingTop = $(cForm).css('padding-top');
    const cFormPaddingBottom = $(cForm).css('padding-bottom');
    const cFormPaddingY = parseInt(cFormPaddingTop, 10) + parseInt(cFormPaddingBottom, 10);
    const cFormForm = $(cForm).find('.c-form__form');
    if (cFormForm.height() < $(window).height() - cFormPaddingY) {
      $(cForm).css('height', $(window).height());
    } else {
      $(cForm).css('height', '');
    }
  });
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

function removeInputValidation(parentForm) {
  const inputs = parentForm.find('.form-control');
  inputs.each((_, input) => {
    $(input).addClass('js-validate');
    $(input).removeClass('js-valid');
    $(input).removeClass('js-invalid');
    $(input).off('keyup blur change');
    $(input).siblings('.invalid-feedback').removeClass('show');
  });
}

export function hideMsgSentInfo(parentForm) {
  const msgSentElements = parentForm.find('.js-msgSent');
  msgSentElements.each((_, msgSentElement) => {
    $(msgSentElement).removeClass('show');
  });
  const msgNotSentElements = parentForm.find('.js-msgNotSent');
  msgNotSentElements.each((_, msgNotSentElement) => {
    $(msgNotSentElement).removeClass('show');
  });
}

export function hideFormOnClick() {
  $('.js-hideForm').click((event) => {
    $('.l-form-container').removeClass('h-open');
    const parentForm = $(event.target).parents('form');
    removeInputValidation(parentForm);
    hideMsgSentInfo(parentForm);
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
