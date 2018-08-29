import $ from 'jquery';
import _ from 'lodash';

const setHeightsArrayDesktop = [
  { className: 'section__header', parentId: 'naprawa' },
  { className: 'section__p--1', parentId: 'naprawa' },
  { className: 'section__p--2', parentId: 'naprawa' },
  { className: 'section__list-div', parentId: 'naprawa' },
  { className: 'section__header', parentId: 'produkcja' },
  { className: 'section__p--1', parentId: 'produkcja' },
  { className: 'section__p--2', parentId: 'produkcja' },
  { className: 'section__list-div', parentId: 'produkcja' }
];

const setHeightsArrayAll = [
  { className: 'section__p--3', parentId: 'produkcja' }
];

// adjust height of a div to the highest child of all considered divs
// fot desktop widths
export function setHeightsDesktop() {
  setHeightsArrayDesktop.forEach((arrayEl) => {
    const elements = $(`#${arrayEl.parentId}`).find(`.${arrayEl.className}`).toArray();
    const heights = elements.map(it => it.children[0].scrollHeight);
    const maxHeight = _.max(heights);
    elements.forEach((el) => { el.style.height = `${maxHeight}px`; });
  });
}

// adjust height of a div to the highest child of all considered divs
// (for all widths, including mobile)
export function setHeightsAll() {
  setHeightsArrayAll.forEach((arrayEl) => {
    const elements = $(`#${arrayEl.parentId}`).find(`.${arrayEl.className}`).toArray();
    const heights = elements.map(it => it.children[0].scrollHeight);
    const maxHeight = _.max(heights);
    elements.forEach((el) => { el.style.height = `${maxHeight}px`; });
  });
}

// reset heights of divs to heights of their own children
export function resetHeights() {
  setHeightsArrayDesktop.forEach((arrayEl) => {
    const elements = $(`#${arrayEl.parentId}`).find(`.${arrayEl.className}`).toArray();
    elements.forEach((el) => { el.style.height = ''; });
  });
}
