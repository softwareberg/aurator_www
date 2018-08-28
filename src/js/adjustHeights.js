import $ from 'jquery';
import _ from 'lodash';

const setHeightsArray = [
  { className: 'section__header', parentId: 'naprawa' },
  { className: 'section__p--1', parentId: 'naprawa' },
  { className: 'section__p--2', parentId: 'naprawa' },
  { className: 'section__list-div', parentId: 'naprawa' }
];


// adjust height of a div to the highest child of all considered divs
export function setHeights() {
  setHeightsArray.forEach((arrayEl) => {
    const elements = $(`#${arrayEl.parentId}`).find(`.${arrayEl.className}`).toArray();
    const heights = elements.map(it => it.children[0].scrollHeight);
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
