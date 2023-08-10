import React, { useEffect } from 'react'
import anime from 'animejs'
import './welcome.css'

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
    starAnime()
    startStar()


    return () => {
      clearInterval(interVal)
    }
  }, [])

  let starList = getStarList()

  return (
    <>
      <div className='welcome-font-box'>
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
      <div className='ainme-star-box'>
        {starList.map(res => {
          return <div className={'ainme-star-item star-item' + res.x + res.y} key={'' + res.x + res.y} >
            <svg className='starIcon' viewBox="0 0 1025 1024"  >
              <path d={starPath} p-id="3241"></path>
            </svg>
          </div>
        })}

      </div>
      <div className='bottom-arrow' onClick={bottomPage} ></div>
    </>
  )
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


function bottomPage() {
  anime({
    targets: 'section:first-child',
    translateY: '-100%',
    rotateX: '90deg',
    duration: 6000
  });
  anime({
    targets: 'section:last-child',
    translateY: '-100%',
    rotateX: '0deg',
    duration: 6000
  });
}


let interVal = ''
function startStar() {
  interVal = setInterval(() => {
    for (let groupIndex = 0; groupIndex <= 3; groupIndex++) {
      const x = Math.round(10 * Math.random())
      const y = Math.round(10 * Math.random())
      const className = '.star-item' + x + y;
      starAnime(className)
    }
  }, 1000)

}


function starAnime(name) {
  anime({
    targets: name,
    keyframes: [
      {
        opacity: '1',
        translateZ :'-1000px',
      },
      {
        opacity: '1',
        translateZ :'-2000px',
      },
      {
        opacity: '0',
        translateZ :'-4300px',
      },
      {
        opacity: '0',
        translateZ :'0',
      },
    ]


      ,
    display: 'block',
    easing: 'easeInOutQuad',
    duration: 15000
  });
}

function getStarList() {
  const list = []
  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      list.push({ x, y })
    }
  }
  return list
}

const starPath = 'M784.16441 645.6c-3.8 3.7-5.5 9-4.6 14.2L835.36441 985c1.8 10.3-6.4 18.7-15.8 18.7-2.5 0-5-0.6-7.5-1.9L520.16441 848.3c-2.3-1.2-4.9-1.8-7.5-1.8s-5.1 0.6-7.5 1.8l-292.1 153.5c-2.5 1.3-5 1.9-7.5 1.9-9.3 0-17.5-8.4-15.8-18.7L245.66441 659.8c0.9-5.2-0.8-10.5-4.6-14.2L4.86441 415.3C-4.63559 406 0.56441 389.9 13.66441 388l326.5-47.5c5.2-0.8 9.7-4 12-8.8l146-295.9c2.9-5.9 8.6-8.9 14.3-8.9s11.4 3 14.3 8.9l146 295.9c2.3 4.7 6.8 8 12 8.8L1011.66441 388c13.1 1.9 18.4 18 8.9 27.3L784.16441 645.6z'