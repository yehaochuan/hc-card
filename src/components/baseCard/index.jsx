import React from 'react'
import RightNav from '../rightNav'
import UserHeader from '../userHeader'
import './index.css'
export default function index({ navList = [], children }) {
    return (
        <div className='nav-box'>
            <div className='content-box'>
                {children}
                {/* 左边栏 */}
                <div className='right-nav-box'>
                    {navList.length > 0 && <RightNav list={navList.map(res => ({ name: res.title }))} />}
                    <UserHeader />
                </div>
            </div>
        </div>
    )
}
