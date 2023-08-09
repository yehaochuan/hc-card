import React, { useEffect } from 'react'
import anime from 'animejs'
import './index.css'
import { bottomPage } from '../index'


export default function Welcome() {
  useEffect(() => {
    anime({
      targets: '.bottom-arrow',
      bottom: '-10px',
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
    animeStep1()
  }, [])
  return (
    <>
      <div className='welcome-font'>
        {letterList.map(item => {
          return (
            <svg className='welcome-font-item' key={item.name} viewBox="0 0 35 35">
              <g strokeWidth="2" stroke="aqua" fill='rgba(0,0,0,0)'>
                <path strokeLinecap="round" strokeLinejoin="round" d={item.path}></path>
              </g>
            </svg>
          )
        })}
      </div>
      <div className='bottom-arrow' onClick={bottomPage} ></div>
    </>
  )
}

function svgClick(e) {
  animeStep1()
  console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
}

function animeStep1() {
  anime({
    targets: '.welcome-font-item path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
}

const letterList = [
  { name: 'W', path: 'm4 4l4 16l4-14l4 14l4-16' },
  { name: 'E', path: 'M17 4H7v16h10M7 12h8' },
  { name: 'L', path: 'M7 4v16h10' },
  { name: 'C', path: 'M18 9a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5' },
  { name: 'O', path: 'M18 9a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5V9' },
  { name: 'M', path: 'M6 20V4l6 14l6-14v16' },
]