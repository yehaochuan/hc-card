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
                    <div className='nav-item' key={item.name} onClick={() => scrollToAnchor(item.name)}>
                        {item.name}
                    </div>
                )
            })}
        </div>
    )
}

function scrollToAnchor(id) {
    if (id) {
        // 找到锚点
        let anchorElement = document.getElementById(id);
        // 如果对应id的锚点存在，就跳转到锚点
        if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
    }

}