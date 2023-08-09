import React from 'react'
import './index.css'
import BaseTitle from '../../components/baseTitle'
import RightNav from '../../components/rightNav'
import UserHeader from '../../components/userHeader'

export default function index() {
    return (
        <div className='nav-box'>
            <div className='content-box'>
                <BaseTitle name={'学习类'} />
                <NavTagGroup list={navList[0]}></NavTagGroup>
                <BaseTitle name={'常用动画库'} />
                <NavTagGroup list={navList[1]}></NavTagGroup>
                <div className='right-nav-box'>
                    <RightNav list={[{ name: '学习类' }, { name: '常用动画库' }]} ></RightNav>
                    <UserHeader></UserHeader>
                </div>
                
            </div>
            
        </div>
    )
}

const navList = [
    [
        {
            name: '近代js教程',
            url: 'https://zh.javascript.info/'
        },
        {
            name: 'ES6教程',
            url: 'https://es6.ruanyifeng.com/'
        },
    ],
    [
        {
            name: 'animeJs',
            intro: '超级轻量级，动画库！',
            url: 'https://animejs.com/'
        },
        {
            name: ' XYZ',
            intro: '自定义和组合复杂的动画！',
            url: 'https://animxyz.com/'
        },
        {
            name: 'codemyui',
            intro: '各种动画实例',
            url: 'https://codemyui.com/'
        },
    ]
]


function NavTagGroup({ list }) {

    return (
        <div className='nav-tag-box'>
            {list.map(item => {
                return (
                    <div className='nav-tag-item' key={item.name} onClick={() => {
                        window.open(item.url)
                    }}>
                        {item.name}
                    </div>
                )
            })}
        </div>
    )
}
