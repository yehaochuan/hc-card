import React from 'react'
import './index.css'

export default function index({ list, titleName }) {
    return (
        <div className='nav-list-box'>
            <div className='nav-title-name'>
                {titleName || '导航名称'}
            </div>
            {list.map(item => {
                return (
                    <div className='nav-item' key={item.name}>
                        <a href={'#' + item.id}> {item.name}</a>
                    </div>
                )
            })}
        </div>
    )
}
