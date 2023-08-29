import React, { useEffect } from 'react'
import anime from 'animejs'
import './welcome.css'
import { useLocation } from 'react-router-dom'

export default function Welcome() {
  const loc = useLocation()
  useEffect(() => {
    arrowAnime() // 箭头
    welcomeObj.Anime()  // 启动welcome动画
    starObj.start() // 启动star动画
    return () => {
      clearInterval(starObj.interVal)  // 清除star动画
    }
  }, [])

  useEffect(() => {
    if (loc.state === 'bottom') {
      rotateObj.bottom()
    }
  }, [loc.state])




  return (
    <>
      <WelcomeComp></WelcomeComp>
      <StarComp></StarComp>
      <div className='bottom-arrow' onClick={() => { rotateObj.bottom(); clearInterval(starObj.interVal) }} >
        <svg viewBox="0 0 1031 1024"  >
          <path d={arrowPath} fill="aqua">
          </path>
        </svg>
      </div>
    </>
  )
}


function WelcomeComp() {
  return (<>
    <div className='welcome-font-box'>
      {welcomeObj.letterList.map(item => {
        return (
          <svg className='welcome-font-item' key={item.name} viewBox="0 0 35 35">
            <g strokeWidth="2" stroke="aqua" fill='rgba(0,0,0,0)'>
              <path strokeLinecap="round" strokeLinejoin="round" d={item.path}></path>
            </g>
          </svg>
        )
      })}
    </div>
  </>)
}
// 欢迎文字 config
const welcomeObj = {
  letterList: [
    { name: 'W', path: 'm4 4l4 16l4-14l4 14l4-16' },
    { name: 'E', path: 'M17 4H7v16h10M7 12h8' },
    { name: 'L', path: 'M7 4v16h10' },
    { name: 'C', path: 'M18 9a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5' },
    { name: 'O', path: 'M18 9a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5V9' },
    { name: 'M', path: 'M6 20V4l6 14l6-14v16' },
  ],
  Anime: function () {
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
}

function StarComp() {
  starObj.starList.length = 100;
  starObj.starList = starObj.starList.fill(null).map((res, index) => { return index >= 10 ? String(index) : '0' + index })
  return (<>
    <div className='ainme-star-box'>
      {starObj.starList.map(res => {
        return <div className={'ainme-star-item star-item' + res} key={res} >
          <svg className='starIcon' viewBox="0 0 1025 1024"  >
            <path d={starObj.path} ></path>
          </svg>
        </div>
      })}

    </div>
  </>)
}
// 星星动画 config
const hasStar = [];
const starObj = {
  path: 'M784.16441 645.6c-3.8 3.7-5.5 9-4.6 14.2L835.36441 985c1.8 10.3-6.4 18.7-15.8 18.7-2.5 0-5-0.6-7.5-1.9L520.16441 848.3c-2.3-1.2-4.9-1.8-7.5-1.8s-5.1 0.6-7.5 1.8l-292.1 153.5c-2.5 1.3-5 1.9-7.5 1.9-9.3 0-17.5-8.4-15.8-18.7L245.66441 659.8c0.9-5.2-0.8-10.5-4.6-14.2L4.86441 415.3C-4.63559 406 0.56441 389.9 13.66441 388l326.5-47.5c5.2-0.8 9.7-4 12-8.8l146-295.9c2.9-5.9 8.6-8.9 14.3-8.9s11.4 3 14.3 8.9l146 295.9c2.3 4.7 6.8 8 12 8.8L1011.66441 388c13.1 1.9 18.4 18 8.9 27.3L784.16441 645.6z',
  interVal: '',
  starList: [],
  start() {
    this.interVal = setInterval(() => {
      for (let groupIndex = 0; groupIndex <= 3; groupIndex++) {
        const x = Math.floor(10 * Math.random())
        const y = Math.floor(10 * Math.random())


        if (x > 7 || x < 3 || y >= 7 || y <= 3) {
          const className = '.star-item' + x + y;
          if (!hasStar.includes(className)) {
            hasStar.push(className)
            this.Anime(className);
            setTimeout(() => { hasStar.splice(hasStar.includes(className), 1) }, 15000)
          }
        }

      }
    }, 1000)
  },
  Anime(name) {
    anime({
      targets: name,
      keyframes: [
        {
          opacity: '1',
          translateZ: '0px',
          duration: 100
        },
        {
          opacity: '0',
          translateZ: '-4000px',
          duration: 10000
        },
        {
          opacity: '0',
          translateZ: '0px',
          duration: 100
        },
      ],
      easing: 'easeInOutQuad'
    });
  }
}

// 箭头
const arrowPath = 'M517.53216 785.92a38.4 38.4 0 0 1-26.88-10.88L17.05216 303.36A38.4 38.4 0 1 1 69.53216 248.96l448 444.8 448-444.8a38.4 38.4 0 1 1 54.4 54.4l-473.6 471.68a38.4 38.4 0 0 1-28.8 10.88z'
function arrowAnime() {
  anime({
    targets: '.bottom-arrow',
    bottom: '4px',
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });
}

export const rotateObj = {
  top() {
    anime({
      targets: 'section:first-child',
      translateY: '0',
      rotateX: '0',
      easing: 'spring(1, 50, 10, 0)',
      duration: 1000
    });
    anime({
      targets: 'section:last-child',
      translateY: '0',
      rotateX: '-90deg',
      easing: 'spring(1, 50, 10, 0)',
      duration: 1000
    });
    starObj.start()
  },
  bottom() {
    anime({
      targets: 'section:first-child',
      translateY: '-100%',
      rotateX: '90deg',
      easing: 'spring(1, 50, 10, 0)',
      duration: 1000
    });
    anime({
      targets: 'section:last-child',
      translateY: '-100%',
      rotateX: '0deg',
      easing: 'spring(1, 50, 10, 0)',
      duration: 1000
    });
  }
}