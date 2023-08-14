import React from 'react'
import './index.css'
import BaseInput from '../../components/baseInput'
import BaseBtn from '../../components/baseBtn'


export default function AddLocalDialog({ isVisiblte, title, closeDialog, addNav }) {
    const navConifg = {
        title: '',
        name: '',
        url: '',
    }
    return (<>
        {
            isVisiblte && (
                <div className='add-local-dialog'>
                    <header>
                        {title}    <span onClick={closeDialog}>x</span>
                    </header>
                    <div className='add-local-dialog-input'>
                        <BaseInput placeholder={'请输入'} onChange={(e) => { navConifg.title = e }}>分组:</BaseInput>
                        <BaseInput placeholder={'请输入'} onChange={(e) => { navConifg.name = e }}>名称:</BaseInput>
                        <BaseInput placeholder={'请输入'} onChange={(e) => { navConifg.url = e }}>URL:</BaseInput>
                    </div>
                    <div className='add-local-dialog-btn'>
                        <BaseBtn onClick={() => addNav(navConifg)}>确认</BaseBtn>
                        <BaseBtn onClick={closeDialog}>取消</BaseBtn>
                    </div>
                </div>
            )
        }
    </>)
}
