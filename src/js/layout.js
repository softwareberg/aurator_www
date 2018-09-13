import $ from 'jquery';
import _ from 'lodash';

const setHeightsArrayDesktop = [
  // { elementClass: 'section__header', parentId: 'naprawa' },
  // { elementClass: 'section__p--1', parentId: 'naprawa' },
  // { elementClass: 'section__p--2', parentId: 'naprawa' },
  // { elementClass: 'section__list-div', parentId: 'naprawa' },
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
  const firmaBg = $('.firma__bg');
  const firmaBgHeight = firmaBg.height();
  const quoteHeight = $('.firma__quote-div').outerHeight();
  const firma = $('.firma');
  const breakpoint = 768;

  if (window.innerWidth >= breakpoint) {
    const maxTopHeight = 7 / 15 * firmaBgHeight;
    const firmaBgTop = quoteHeight < maxTopHeight ? quoteHeight : maxTopHeight;
    firmaBg.css({ top: `${-firmaBgTop}px` });
    firma.css({ height: `${firmaBgHeight}px` });
  } else {
    firmaBg.css({ top: '' });
    firma.css({ height: '' });
  }
}
