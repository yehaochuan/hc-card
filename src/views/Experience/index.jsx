import React from 'react'
import './index.css'
export default function index() {
    return (
        <div className='experience-box'>
            <div className='experience-left-box'>
                {experienceList.map((res, index) => {
                    return (<div className='experience-nav-item'>

                        <div  className='experience-nav-item-content'>
                            <div className='experience-nav-name'>
                                {res.name}
                            </div>
                            <div className='experience-nav-time'>
                                {res.time}
                            </div>
                        </div>

                        <div className={index < experienceList.length - 1 && 'experience-nav-line'}></div>
                    </div>)
                })}

            </div>
            <div className='experience-right-box'>

            </div>
        </div >
    )
}

const experienceList = [
    {
        name: '经历1',
        time: '2021.6~2022.1',
        label: 'xxxx',
        content: 'xxxx'
    },
    {
        name: '经历2',
        time: '2021.6~2022.1',
        label: 'xxxx',
        content: 'xxxx'
    },
    {
        name: '经历3',
        time: '2021.6~2022.1',
        label: 'xxxx',
        content: 'xxxx'
    }
]
