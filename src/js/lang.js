import $ from 'jquery';
import { setFotoPosition } from './layout';
import { arrLang, arrPlaceholders } from './langData';

function translateTexts(lang) {
  $('.js-lang')
    .toArray()
    .forEach((element) => {
      element.innerHTML = arrLang[lang][element.getAttribute('data-key')];
    });
}

function translatePlaceholders(lang) {
  $('.js-placeholder')
    .toArray()
    .forEach((element) => {
      element.placeholder = arrPlaceholders[lang][element.getAttribute('data-key')];
    });
}

function setCurrentLanguage(lang) {
  $('.js-translate')
    .toArray()
    .forEach((translateLink) => {
      if (translateLink.getAttribute('data-key') === lang) {
        translateLink.classList.add('c-lang--current-lang');
      } else {
        translateLink.classList.remove('c-lang--current-lang');
      }
    });

  $('.c-lang__toggle-text').text(lang);
  localStorage.setItem('currentLangAurator', lang);
}

function resetDropdownState() {
  $('.c-lang__icon').removeClass('d-none');
  $('.c-lang__icon-hide').addClass('d-none');
  $('.c-lang__dd').addClass('d-none');
}


export function translateOnInit() {
  const currentLanguage = localStorage.getItem('currentLangAurator');
  if (currentLanguage) {
    translateTexts(currentLanguage);
    translatePlaceholders(currentLanguage);
    setCurrentLanguage(currentLanguage);
  }
}

export function translateOnClick() {
  $('.js-translate').click((event) => {
    const lang = event.target.getAttribute('data-key');
    translateTexts(lang);
    translatePlaceholders(lang);
    setCurrentLanguage(lang);
    resetDropdownState();
    setFotoPosition();
  });
}
