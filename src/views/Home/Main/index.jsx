import React from 'react'
import anime from 'animejs'
import './index.css'
import Welcome from '../Welcome/welcome'


export default function Section() {
    return (
        <div style={{ height: '100%' }}>
            <section style={{ transform: 'translateY(0) rotateX(0)' }} key={'top'}>
                <Welcome />
            </section>
            <section style={{ transform: 'translateY(0) rotateX(-90deg)' }} key={'bottom'}>
                12345
            </section>
        </div >
    )
}

// function bottomPage() {
//     anime({
//         targets: 'section:first-child',
//         translateY: '-100%',
//         rotateX: '90deg',
//         duration: 6000
//     });
//     anime({
//         targets: 'section:last-child',
//         translateY: '-100%',
//         rotateX: '0deg',
//         duration: 6000
//     });
// }

export function topPage() {
    anime({
        targets: 'section:first-child',
        translateY: '0',
        rotateX: '0',
        duration: 6000
    });
    anime({
        targets: 'section:last-child',
        translateY: '0',
        rotateX: '-90deg',
        duration: 6000
    });
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