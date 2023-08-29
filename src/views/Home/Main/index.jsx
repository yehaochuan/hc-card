import React from 'react'
import Welcome from '../Welcome/welcome'
import Experience from '../../Experience'

export default function Section() {
    return (
        <div style={{ height: '100%' }}>
            <section style={{ transform: 'translateY(0) rotateX(0)' }} key={'top'}>
                <Welcome />
            </section>
            <section style={{ transform: 'translateY(0) rotateX(-90deg)' }} key={'bottom'}>
                 <Experience />
            </section>
        </div >
    )
}


// function setScrollFun() {
//     window.onmousewheel = scrollFunc;
//     document.onmousewheel = scrollFunc;
//     if (document.addEventListener) { // Firefox
//         document.addEventListener('DOMMouseScroll', scrollFunc, false);
//     }
// }

// let isBottom = false
// let isTop = true
// const scrollFunc = function (e) {
//     e = e || window.event
//     if (e.wheelDelta) { //IE/Opera/Chrome
//         if (parseInt(e.wheelDelta) > 0) {
//             isTop || topPage()
//         } else {
//             isBottom || bottomPage()
//         }
//     } else if (e.detail) {//Firefox
//         if (parseInt(e.detail) > 0) {
//             isTop || topPage()
//         } else {
//             isBottom || bottomPage()
//         }
//     }
// }