import React, { useState } from 'react'
import './index.css'
import BaseTitle from '../../components/baseTitle'
import experienceList from './config'

export default function Index() {
    const [activeName, setActiveName] = useState(experienceList[0].name)
    function navClick(name) {
        setActiveName(name)
    }
    return (
        <div className='experience-box'>
            <div className='experience-left-box'>
                {experienceList.map((res, index) => {
                    return (<div key={res.name}>
                        <div className={
                            'experience-nav-item' +
                            (activeName === res.name ? ' experience-nav-item-active' : ' 1')

                        }

                            onClick={() => navClick(res.name)}
                        >
                            <div className='experience-nav-name'>
                                {res.name}
                            </div>
                            <div className='experience-nav-time'>
                                时间:  {res.time}<span>{res.long}</span>
                            </div>
                            <div className='experience-nav-content'>
                                {res.content}
                            </div>
                        </div>
                        <div className={index < experienceList.length - 1 ? 'experience-nav-line' : ''}></div>
                    </div>
                    )
                })}

            </div>
            <div className='experience-right-box'>

                {experienceList.filter(res => res.name === activeName)[0].details.map(res => {
                    return (<div key={res.name}>
                        <BaseTitle name={res.name}></BaseTitle>
                        <div dangerouslySetInnerHTML={{ __html: res.content}}></div>
                    </div>)
                })}
            </div>
        </div >
    )
}

