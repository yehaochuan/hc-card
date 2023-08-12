import React from 'react'
import anime from 'animejs'
import Welcome from '../Welcome/welcome'


export default function Section() {
    return (
        <div style={{ height: '100%' }}>
            <section style={{ transform: 'translateY(0) rotateX(0)' }} key={'top'}>
                <Welcome />
            </section>
            <section style={{ transform: 'translateY(0) rotateX(-90deg)' }} key={'bottom'}>
                <button onClick={rotateObj.top}> top </button>
            </section>
        </div >
    )
}

export const rotateObj = {
    top() {
        anime({
            targets: 'section:first-child',
            translateY: '0',
            rotateX: '0',
            easing:  'spring(1, 50, 10, 0)',
            duration: 1000
        });
        anime({
            targets: 'section:last-child',
            translateY: '0',
            rotateX: '-90deg',
            easing:  'spring(1, 50, 10, 0)',
            duration: 1000
        });
    },
    bottom() {
        anime({
            targets: 'section:first-child',
            translateY: '-100%',
            rotateX: '90deg',
            easing:  'spring(1, 50, 10, 0)',
            duration: 1000
        });
        anime({
            targets: 'section:last-child',
            translateY: '-100%',
            rotateX: '0deg',
            easing:  'spring(1, 50, 10, 0)',
            duration: 1000
        });
    }
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