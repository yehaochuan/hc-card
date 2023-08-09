import React from 'react'
import './index.css'

export default function index() {
    return (
        <div className='user-box'>
            <div className='header-img-box'></div>
            <div className='user-name-box'>
                <div>野生切图仔</div>
                <div>只不过是个切图的罢了！</div>
            </div>
            <div className='user-details-list'>
                {list.map(item => {
                    return <div className='user-details-list-item' key={item.name}>
                        <div className='user-details-list-item-name'>{item.name}</div>
                        <div className='user-details-list-item-val'>{item.value}</div>
                    </div>
                })}
            </div>

            <div className='my-info-box'>
                <div>微信号：HaoChuan789</div>
                <div>Q Q号：1005213815</div>
            </div>
        </div>
    )
}

const list = [
    { name: '文章', value: '0' },
    { name: 'CSDN', value: '52' },
    { name: '证书', value: 'n' },
]