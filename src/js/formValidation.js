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

function showMsgSentInfo(msgSentElements) {
  msgSentElements.each((_, msgSentElement) => {
    $(msgSentElement).addClass('show');
    setTimeout(() => {
      $(msgSentElement).removeClass('show');
    }, 8000);
  });
}

function resetInputsValidation(inputElements) {
  inputElements.each((_, inputElement) => {
    $(inputElement).addClass('js-validate');
    $(inputElement).removeClass('js-valid');
    $(inputElement).removeClass('js-invalid');
    $(inputElement).off('keyup blur change');
    $(inputElement).val('');
  });
}

//  Form Validation
export default function validateForm() {
  const forms = $('.needs-validation');

  forms.each((_, form) => {
    const submitBtns = $(form).find('.js-submitBtn');

    submitBtns.each((_, submitBtn) => {
      $(submitBtn).click(() => {
        const InputsToValidate = $(form).find('.js-validate');

        if (InputsToValidate.length) {
          InputsToValidate.each((_, inputToValidate) => {
            validateInput(inputToValidate);
            validateInputOnEvent(inputToValidate);
          });
        }

        const invalidInputs = $(form).find('.js-invalid');

        if (invalidInputs.length === 0 && $(form).find('.js-validate').length === 0) {
          const msgSentInfos = $(form).find('.js-msgSent');
          showMsgSentInfo(msgSentInfos);

          const validInputs = $(form).find('.js-valid');
          resetInputsValidation(validInputs);
        }
      });
    });
  });
}
