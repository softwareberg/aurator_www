import $ from 'jquery';

function validateInput(inputToValidate) {
  if (inputToValidate.checkValidity() === true) {
    $(inputToValidate).addClass('js-valid');
    $(inputToValidate).removeClass('js-invalid');
    $(inputToValidate).siblings('.invalid-feedback').removeClass('show');
  } else {
    $(inputToValidate).removeClass('js-valid');
    $(inputToValidate).addClass('js-invalid');
    $(inputToValidate).siblings('.invalid-feedback').addClass('show');
  }
  $(inputToValidate).removeClass('js-validate');
}

function validateInputOnEvent(inputToValidate) {
  $(inputToValidate).on('keyup blur change', () => {
    validateInput(inputToValidate);
  });
}

export function showMsgSentInfo(form) {
  const msgSentInfos = $(form).find('.js-msgSent');
  msgSentInfos.each((_, msgSentInfo) => {
    $(msgSentInfo).addClass('show');
  });
}

export function showMsgNotSentInfo(form) {
  const msgNotSentInfos = $(form).find('.js-msgNotSent');
  msgNotSentInfos.each((_, msgNotSentInfo) => {
    $(msgNotSentInfo).addClass('show');
  });
}

export function resetInputsValidation(form) {
  const inputElements = $(form).find('.js-valid');
  inputElements.each((_, inputElement) => {
    $(inputElement).addClass('js-validate');
    $(inputElement).removeClass('js-valid');
    $(inputElement).removeClass('js-invalid');
    $(inputElement).off('keyup blur change');
    $(inputElement).val('');
  });
}

export function validateForm(form) {
  const inputsToValidate = $(form).find('.js-validate');
  inputsToValidate.each((_, inputToValidate) => {
    validateInput(inputToValidate);
    validateInputOnEvent(inputToValidate);
  });

  const invalidInputs = $(form).find('.js-invalid');
  return invalidInputs.length === 0;
}
