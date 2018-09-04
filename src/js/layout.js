import $ from 'jquery';
import _ from 'lodash';

const setHeightsArray = [
  // { className: 'flex-col--2__h1', parentId: 'naprawa'},
  // { className: 'flex-col--2__p--1', parentId: 'naprawa'},
  // { className: 'flex-col--2__p--2', parentId: 'naprawa'},
  // { className: 'flex-col--2__list', parentId: 'naprawa'},
];


// adjust height of a div to the highest child of all considered divs
export function setHeights() {
  setHeightsArray.forEach((arrayEl) => {
    const elements = $(`#${arrayEl.parentId}`).find(`.${arrayEl.className}`).toArray();
    const heights = elements.map(it => it.scrollHeight);
    const maxHeight = _.max(heights);
    elements.forEach((el) => { el.style.height = `${maxHeight}px`; });
  });
}

// reset heights of divs to heights of their own children
export function resetHeights() {
  setHeightsArray.forEach((arrayEl) => {
    const elements = $(`#${arrayEl.parentId}`).find(`.${arrayEl.className}`).toArray();
    elements.forEach((el) => { el.style.height = ''; });
  });
}

export function setPositionForeground() {
  const quoteHeight = $('.firma__quote-div').height();
  const foregroundHeight = $('.firma__foreground').height();
  const foto = $('.firma__foto');
  const fotoHeight = quoteHeight + foregroundHeight;
  foto.height(fotoHeight);
  // const foregroundTexts = $('.firma__foreground-texts');
  // const doswiadczenie = $('.section__cover-img--doswiadczenie');
  // foregroundTexts.css('top', `${-foregroundTexts.outerHeight()}px`);
  // doswiadczenie.height(foregroundTexts.outerHeight());
}
