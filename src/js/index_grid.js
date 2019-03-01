import {
    square
} from './mylib'

import '../scss/main_grid.scss'



console.log(square(4));


window.onresize = (event) => {

    var value = (window.innerWidth * 0.496)
    var halfValue = value
    // document.getElementById('proje').style.height= value
    // document.querySelector('.proj-static').style.height= value + "px";

    // var el = document.getElementById("proje");
    // el.style.height = value + 'px';


    // var halfEl = document.getElementsByClassName('half')

    // for (var i = 0, max = halfEl.length; i < max; i++) {
    //     halfEl[i].style.height = halfValue + "px";
    // }

    // el.style.display = 'none'
    // console.log(value)
    // console.log(el)

}
