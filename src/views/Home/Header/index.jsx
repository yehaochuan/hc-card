import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import anime from 'animejs'
export default function Header() {
    return (
        <header>
            <img src="../../../logo.png" alt="logo" />
            <Menu list={list} />
        </header>
    )
}
function Menu({ list }) {
    const navigate = useNavigate()
    return (
        <div className="hc_menu_three_box">
            {list.map(item => {
                return (
                    <div className="hc_three_menu_item" key={item.name} onClick={() => { openPageOrUrl(item, navigate); }}>
                        <span className="hc_three_menu_text">{item.name}</span>
                        <div className="hc_three_menu_rotate" >
                            <span className="hc_three_menu_text">{item.name}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const list = [
    { name: '首页', path: '/Home' },
    { name: '博客', url: 'https://haochuan.blog.csdn.net' },
    { name: '导航', path: '/Home/Nav' }
]
function openPageOrUrl({ path, url }, navigate) {
    path && navigate(path);
    url && window.open(url);
}