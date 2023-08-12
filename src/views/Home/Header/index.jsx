import React, { useState, useEffect } from 'react'
import anime from 'animejs'
import { useNavigate } from 'react-router-dom'
import './index.css'

export default function Header() {
    const navigate = useNavigate()
    return (
        <header>
            <img src="../../../logo.png" alt="logo" />
            <PC_Menu list={menuConfig.list} navigate={navigate} />
            <Phone_Menu list={menuConfig.list} navigate={navigate} />
        </header>
    )
}
function PC_Menu({ list, navigate }) {

    return (
        <div className="menu_pc_box">
            {list.map(item => {
                return (
                    <div
                        className="menu_pc_item"
                        key={item.name}
                        onClick={() => { menuConfig.open(item, navigate); }}
                    >
                        <span className="menu_pc_text">{item.name}</span>
                        <div className="menu_pc_rotate" >
                            <span className="menu_pc_text">{item.name}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function Phone_Menu({ list, navigate }) {
    let [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (isOpen) {
            menuConfig.openPhoneMenu()
        }
    }, [isOpen])
    let isClick = true;
    function menuIconClick() {

        if (isOpen) {
            menuConfig.closePhoneMenu()
            isClick = false
            setTimeout(() => { setIsOpen(!isOpen); isClick = true }, 1000)
        } else {
            setIsOpen(!isOpen)
        }

    }

    return (
        <>
            <div className='menu_phone_box' >
                <svg viewBox="0 0 1024 1024" onClick={() => { isClick && menuIconClick() }}>
                    <path d={menuConfig.path} fill="aqua"></path>
                </svg>
                {isOpen && (<div className='menu_phone_content'>
                    {
                        list.map(item => {
                            return (
                                <div
                                    className="menu_phone_item"
                                    key={item.name}
                                    onClick={() => menuConfig.open(item, navigate, setIsOpen)}
                                >
                                    <span className="menu_pc_text">{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>)}
            </div>
        </>
    )

}


const menuConfig = {
    list: [
        { name: '首页', path: '/Home' },
        { name: '博客', url: 'https://haochuan.blog.csdn.net' },
        { name: '导航', path: '/Home/Nav' }
    ],
    open({ path, url }, navigate, setIsOpen) {
        path && navigate(path);
        url && window.open(url);
        setIsOpen && setIsOpen(false)
    },
    openPhoneMenu() {
        anime({
            targets: '.menu_phone_content',
            translateX: -200,
            easing: 'spring(1, 80, 10, 0)'
        });
    },
    closePhoneMenu() {
        anime({
            targets: '.menu_phone_content',
            translateX: 0,
            easing: 'spring(1, 80, 10, 0)'
        });
    },
    path: 'M962.6 774.9H417.1c-33.8 0-61.4 25-61.4 55.8v66.6c0 30.8 27.5 55.8 61.4 55.8h545.5c33.8 0 61.4-25 61.4-55.8v-66.6c0-30.8-27.5-55.8-61.4-55.8z m16.9 122.4c0 5.4-7 11.3-16.9 11.3H417.1c-10 0-16.9-6-16.9-11.3v-66.6c0-5.4 7-11.3 16.9-11.3h545.5c10 0 16.9 6 16.9 11.3v66.6zM164.8 748.2h-98C30 748.2 0 778.1 0 815v98c0 36.9 30 66.8 66.9 66.8h98c36.8 0 66.8-29.9 66.7-66.8v-98c0-36.8-29.9-66.8-66.8-66.8zM187.1 913c0 12.3-10 22.3-22.3 22.3h-98c-12.3 0-22.3-10-22.3-22.3v-98c0-12.3 10-22.3 22.3-22.3h98c12.3 0 22.3 10 22.3 22.3v98zM962.6 70.9H417.1c-33.8 0-61.4 25-61.4 55.8v66.6c0 30.8 27.5 55.8 61.4 55.8h545.5c33.8 0 61.4-25 61.4-55.8v-66.6c0-30.8-27.5-55.8-61.4-55.8z m16.9 122.5c0 5.4-7 11.3-16.9 11.3H417.1c-10 0-16.9-6-16.9-11.3v-66.6c0-5.4 7-11.3 16.9-11.3h545.5c10 0 16.9 6 16.9 11.3v66.6zM164.8 44.2h-98C30 44.2 0 74.1 0 111v98c0 36.9 30 66.9 66.9 66.9h98c36.8 0 66.8-30 66.7-66.9v-98c0-36.8-29.9-66.8-66.8-66.8zM187.1 209c0 12.3-10 22.3-22.3 22.3h-98c-12.3 0-22.3-10-22.3-22.3v-98c0-12.3 10-22.3 22.3-22.3h98c12.3 0 22.3 10 22.3 22.3v98zM962.6 422.9H417.1c-33.8 0-61.4 25-61.4 55.8v66.6c0 30.8 27.5 55.8 61.4 55.8h545.5c33.8 0 61.4-25 61.4-55.8v-66.6c0-30.8-27.5-55.8-61.4-55.8z m16.9 122.4c0 5.4-7 11.3-16.9 11.3H417.1c-10 0-16.9-6-16.9-11.3v-66.6c0-5.4 7-11.3 16.9-11.3h545.5c10 0 16.9 6 16.9 11.3v66.6zM164.8 396.2h-98C30 396.2 0 426.1 0 463v98c0 36.9 30 66.8 66.9 66.8h98c36.8 0 66.8-29.9 66.7-66.8v-98c0-36.8-29.9-66.8-66.8-66.8zM187.1 561c0 12.3-10 22.3-22.3 22.3h-98c-12.3 0-22.3-10-22.3-22.3v-98c0-12.3 10-22.3 22.3-22.3h98c12.3 0 22.3 10 22.3 22.3v98z'
}


