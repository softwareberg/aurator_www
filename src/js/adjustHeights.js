import $ from "jquery";
window.jQuery = $; window.$ = $;
require('lodash');

const setHeightsArray = [
    // { className: 'flex-col--2__h1', parentId: 'naprawa'},
    // { className: 'flex-col--2__p--1', parentId: 'naprawa'},
    // { className: 'flex-col--2__p--2', parentId: 'naprawa'},
    // { className: 'flex-col--2__list', parentId: 'naprawa'},
];


//adjust height of a div to the highest child of all considered divs
export function setHeights() {
    setHeightsArray.forEach(arrayEl => {
        const elements = $('#' + arrayEl.parentId).find('.' + arrayEl.className).toArray();
        const heights = elements.map(it => it.scrollHeight);
        const maxHeight = _.max(heights);
        elements.forEach(el => el.style.height = maxHeight + 'px');
    });
}

//reset heights of divs to heights of their own children
export function resetHeights() {
    setHeightsArray.forEach(arrayEl => {
        const elements = $('#' + arrayEl.parentId).find('.' + arrayEl.className).toArray();
        elements.forEach(el => el.style.height = '');
    });
}