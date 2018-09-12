import $ from 'jquery';
import _ from 'lodash';

const setHeightsArrayDesktop = [
  // { elementClass: 'section__header', parentId: 'naprawa' },
  // { elementClass: 'section__p--1', parentId: 'naprawa' },
  // { elementClass: 'section__p--2', parentId: 'naprawa' },
  // { elementClass: 'section__list-div', parentId: 'naprawa' },
  // { elementClass: 'section__header', parentId: 'produkcja' },
  // { elementClass: 'section__p--1', parentId: 'produkcja' },
  // { elementClass: 'section__p--2', parentId: 'produkcja' },
  // { elementClass: 'section__list-div', parentId: 'produkcja' }
];

const setHeightsArrayAll = [
  { elementClass: 'section__p--3', parentId: 'produkcja' }
];

// adjust height of a div to the highest child of all considered divs
function setHeightsInner(elementsWithParents) {
  return () => {
    elementsWithParents.forEach((elementWithParent) => {
      const elements = $(`#${elementWithParent.parentId}`).find(`.${elementWithParent.elementClass}`).toArray();
      const heights = elements.map(it => it.children[0].scrollHeight);
      const maxHeight = _.max(heights);
      elements.forEach((el) => { el.style.height = `${maxHeight}px`; });
    });
  };
}

// for desktop widths
export const setHeightsDesktop = setHeightsInner(setHeightsArrayDesktop);
// for all widths
export const setHeightsAll = setHeightsInner(setHeightsArrayAll);

// reset heights of divs to heights of their own children
export function resetHeights() {
  setHeightsArrayDesktop.forEach((elementWithParent) => {
    const elements = $(`#${elementWithParent.parentId}`).find(`.${elementWithParent.elementClass}`).toArray();
    elements.forEach((el) => { el.style.height = ''; });
  });
}

export function setFotoHeight() {
  const quoteHeight = $('.firma__quote-div').height();
  const foregroundHeight = $('.firma__foreground').height();
  const foto = $('.firma__foto');
  let fotoHeight;
  const breakpoint1 = 1100;
  const breakpoint2 = 1450;
  if (window.innerWidth >= breakpoint2) {
    fotoHeight = quoteHeight + 0.2 * foregroundHeight;
    foto.css('right', '4rem');
  } else if (window.innerWidth >= breakpoint1) {
    fotoHeight = quoteHeight + 0.3 * foregroundHeight;
    foto.css('right', '0.2rem');
  } else {
    fotoHeight = quoteHeight + 0.45 * foregroundHeight;
  }
  foto.height(fotoHeight);
}
