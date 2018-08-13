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
    setHeightsArray.forEach(val => {
        let parentElement = document.getElementById(val.parentId);
        let elements = parentElement.querySelectorAll('.' + val.className);
        let maxH = 0;
        
        elements.forEach(el => {
            let childH = el.children[0].scrollHeight;
            
            if (maxH <childH) {
                maxH = childH;
            }
        });
        elements.forEach(el => el.style.height = maxH + 'px')
    });
}

//reset heights of divs to heights of their own children
export function resetHeights() {
    setHeightsArray.forEach(val => {
        let parentElement = document.getElementById(val.parentId);
        let elements = parentElement.querySelectorAll('.' + val.className);
        elements.forEach(el => {
            let childH = el.children[0].scrollHeight;
            el.style.height = childH + 'px';
        });
    });
}