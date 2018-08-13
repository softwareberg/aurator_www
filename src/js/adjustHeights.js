import $ from "jquery";
window.jQuery = $; window.$ = $;

const setHeightsArray = [
    // { className: 'flex-col--2__h1', parentId: 'naprawa'},
    // { className: 'flex-col--2__p--1', parentId: 'naprawa'},
    // { className: 'flex-col--2__p--2', parentId: 'naprawa'},
    // { className: 'flex-col--2__list', parentId: 'naprawa'},
];


//adjust height of a div to the highest child of all considered divs
export function setHeights() {
    setHeightsArray.forEach(arrayEl => {
        const parentElement = document.getElementById(arrayEl.parentId);
        const elements = parentElement.querySelectorAll('.' + arrayEl.className);
        let maxHeight = 0;
        
        elements.forEach(el => {
            let childHeight = el.children[0].scrollHeight;
            
            if (maxHeight < childHeight) {
                maxHeight = childHeight;
            }
        });
        elements.forEach(el => el.style.height = maxHeight + 'px')
    });
}

//reset heights of divs to heights of their own children
export function resetHeights() {
    setHeightsArray.forEach(arrayEl => {
        const parentElement = document.getElementById(arrayEl.parentId);
        const elements = parentElement.querySelectorAll('.' + arrayEl.className);
        elements.forEach(el => {
            el.style.height = '';
        });
    });
}