require("css/main.scss");
import {setHeights, resetHeights} from 'js/adjustHeights';

let breakpointPC = 992;

$(document).ready(() =>{
    if (window.innerWidth >= breakpointPC ){
        //for development purposes only:
        setTimeout( () => setHeights(), 500); 
        //for production purposes:
        // setHeights();
    }
    window.addEventListener('resize', function(){
        if (window.innerWidth >= breakpointPC ){
            //on resize of a window adjust heights of mirrored elements
            setHeights();
        } else {
            // for smaller screens reset heights of the elements to default
            resetHeights();
        }
    });
});