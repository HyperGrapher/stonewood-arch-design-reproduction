import {
    square
} from './mylib'

import '../scss/main_grid.scss'


(function() {

    fixDivHeight()

    // Equlize img height on resize.
    window.onresize = (event) => {

        fixDivHeight()
    
    }
})();

// Equlize img element height with the other side div height
function fixDivHeight(){
    var imgHeight = document.getElementById("proj-right-wrap").offsetHeight;
    document.getElementById("proj-left-img").style.height = imgHeight + 'px';
}


