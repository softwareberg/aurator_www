import $ from 'jquery';
import {
  validateForm, resetInputsValidation, showMsgSentInfo, showMsgNotSentInfo
} from './formValidation';

export function debounce(fn, delay) {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

export function sendMessage() {
  $('.js-sendMsg').each((_, btn) => {
    $(btn).click(() => {
      const form = $(btn).parents('form')[0];
      if (validateForm(form) === true) {
        const name = $('#contact-form-name').val();
        const email = $('#contact-form-email').val();
        const msg = $('#contact-form-message').val();
        const jsonObject = { name, email, body: msg };

        $.ajax({
          type: 'POST',
          url: 'http://www.aurator.com.pl/mail.php',
          data: JSON.stringify(jsonObject)
        }).done(() => {
          showMsgSentInfo(form);
          resetInputsValidation(form);
        }).fail(() => {
          showMsgNotSentInfo(form);
        });
      }
    });
  });
}

export function sendPhoneNo() {
  $('.js-sendPhoneNo').each((_, btn) => {
    $(btn).click(() => {
      const form = $(btn).parents('form')[0];
      if (validateForm(form) === true) {
        const name = $('#phone-form-name').val();
        const tel = $('#phone-form-phone').val();
        const jsonObject = { name, tel };

        $.ajax({
          type: 'POST',
          url: 'http://www.aurator.com.pl/tel.php',
          data: JSON.stringify(jsonObject)
        }).done(() => {
          showMsgSentInfo(form);
          resetInputsValidation(form);
        }).fail(() => {
          showMsgNotSentInfo(form);
        });
      }
    });
  });
}
