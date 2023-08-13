import React, { useEffect, useState } from 'react'
import './index.css'
import BaseTitle from '../../components/baseTitle'
import RightNav from '../../components/rightNav'
import UserHeader from '../../components/userHeader'
import AddLocalDialog from './AddLocalDialog'

export default function Index() {
    const [nList, setList] = useState([]);
    useEffect(() => {
        setList(navList)
    }, [])

    function changeNavList() {
        isLocal = !isLocal;
        if (isLocal) {
            let list = localStorage.getItem('navList') || '[]';
            list = JSON.parse(list)
            setList(list)
        } else {
            setList(navList)
        }
    }

    const [isVisiblte, setVisiblte] = useState(false)
    function openDialog() {
        setVisiblte(!isVisiblte)
    }
    function closeDialog() {
        setVisiblte(false)
    }
    function addNav(item) {
        let list = localStorage.getItem('navList') || '[]';
        list = JSON.parse(list)
        const nowList = formatNavData(item, list)
        localStorage.setItem('navList', JSON.stringify(nowList))
        setList(nowList)
        closeDialog()
    }

    return (
        <div className='nav-box'>
            <div className='content-box'>
                <NavContent navList={nList} />
                {isLocal && <AddLocalBtn openDialog={openDialog} />}

                {/* 左边栏 */}
                <div className='right-nav-box'>
                    <RightNav list={navList.map(res => ({ name: res.title }))} />
                    <UserHeader />
                </div>


                <NavLocalIcon changeNavList={changeNavList} />
                <AddLocalDialog
                    isVisiblte={isVisiblte}
                    title={"添加本地导航"}
                    closeDialog={closeDialog}
                    addNav={addNav}
                />
            </div>
        </div>
    )
}

// 导航列表内容
function NavContent({ navList }) {
    return (<>
        {navList.map(item => {
            return (
                <div key={item.title} name={item.title} id={item.title}>
                    <BaseTitle name={item.title} />
                    <NavTagGroup list={item.list}></NavTagGroup>
                </div>
            )
        })}
    </>)
}
// 导航每组
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
// 切换本地按钮
function NavLocalIcon({ changeNavList }) {
    const path = 'M448 832v64l-128.32-128L448 640v64h192a192 192 0 0 0 115.84-345.152l0.704-0.896 90.24-90.24A320 320 0 0 1 640 832l-192.064 0.064zM576 192V128l131.008 128L576 384V320H384a192 192 0 0 0-115.712 345.216l-91.072 91.008A320 320 0 0 1 384 192h192.064z'
    return (
        <div className='nav-local-box' onClick={changeNavList}>
            <svg viewBox="0 0 1024 1024">
                <path d={path} fill="aqua"></path>
            </svg>
        </div>
    )
}

function AddLocalBtn({ openDialog }) {
    return (
        <div className='add-local-btn' onClick={openDialog}>
            +
        </div>
    )
}

function formatNavData(addItem, saveList) {
    let isRepect = false
    let hasTilte = false
    let Index = null
    saveList.forEach((item, index) => {
        if (item.title === addItem.title) {
            hasTilte = true
            Index = index
            item.list.forEach((child, index2) => {
                if (addItem.name === child.name) {
                    isRepect = true
                }
            })
        }
    })
    if (hasTilte) {
        if (!isRepect) {
            saveList[Index].list.push({ name: addItem.name, url: addItem.url })
        }
    } else {
        saveList.push({
            title: addItem.title,
            list: [{ name: addItem.name, url: addItem.url }]
        })
    }
    return saveList
}

let isLocal = false;
const navList = [
    {
        title: '仓库、部署',
        list: [
            { name: 'Github', url: 'https://github.com/' },
            { name: 'Gitee', url: 'https://gitee.com/' },
            { name: 'Netlify', url: 'https://app.netlify.com/' },
        ]
    },
    {
        title: '笔记、博客',
        list: [
            { name: '有道云笔记', url: 'https://note.youdao.com/' },
            { name: 'CSDN', url: 'https://www.csdn.net/', },
            { name: '稀土掘金', url: 'https://juejin.cn/' }
        ]
    },
    {
        title: '常用库',
        list: [
            { name: 'Echarts 国内站点', url: 'https://www.isqqw.com/', },
            { name: 'AnimeJs 动画库', url: 'https://animejs.com/', },
            { name: 'Antd of Vue', url: 'https://www.antdv.com/' },
            { name: 'Antd of React', url: 'https://3x.ant.design/docs/react/introduce-cn' },
            { name: 'Element-plus', url: 'https://element-plus.org/' }
        ]
    },
    {
        title: '文档',
        list: [
            { name: '近代js教程', url: 'https://zh.javascript.info/' },
            { name: 'ES6', url: 'https://es6.ruanyifeng.com/' },
            { name: 'Vue3 中文文档', url: 'https://cn.vuejs.org/' },
            { name: 'React 中文文档', url: 'https://react.docschina.org/' },
            { name: 'Css Tricks', url: 'https://lhammer.cn/You-need-to-know-css/#/zh-cn/' },
        ]
    },
    {
        title: '工具类型',
        list: [
            { name: '半径工具', url: 'https://9elements.github.io/fancy-border-radius/' },
            { name: '加载动画', url: 'https://loading.io/' },
            { name: '波浪', url: 'https://getwaves.io/' },
            { name: '阴影生成', url: 'https://neumorphism.io/#e0e0e0' },
            { name: '0代码', url: 'https://www.lingdaima.com/' },
            { name: 'Codemyui 动画实例', url: 'https://codemyui.com/' },
        ]
    },
    {
        title: 'Icon',
        list: [
            {
                name: 'iconfont 阿里',
                url: 'https://www.iconfont.cn/'
            },
            {
                name: 'iconify',
                url: 'https://icon-sets.iconify.design/'
            },
        ]
    },
]
