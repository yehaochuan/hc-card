import React, { useEffect, useState } from 'react'
import './index.css'
import BaseTitle from '../../components/baseTitle'
import BaseCard from '../../components/baseCard'
import AddLocalDialog from './AddLocalDialog'
let isLocal = false

export default function Index() {
    const [nList, setList] = useState([]);
    const [isVisiblte, setVisiblte] = useState(false)
    useEffect(() => { setList(navList) }, [])

    return (
        <BaseCard navList={nList}>
            <NavContent
                navList={nList}
                isLocal={isLocal}
                deleteItem={deleteItem}
                setList={setList}
            />
            {
                isLocal &&
                <div
                    className='add-local-btn'
                    onClick={() => {
                        setVisiblte(!isVisiblte)
                    }}>+
                </div>
            }
            <NavLocalIcon
                changeNavList={changeNavList}
                setList={setList}
            />
            <AddLocalDialog
                isVisiblte={isVisiblte}
                title={"添加本地导航"}
                setList={setList}
                closeDialog={() => { setVisiblte(false) }}
                addNav={addNav}
            />
        </BaseCard>
    )
}

// 添加一个本地导航
function addNav(item, setList) {
    let list = localStorage.getItem('navList') || '[]';
    list = JSON.parse(list)
    const nowList = formatNavData(item, list)
    localStorage.setItem('navList', JSON.stringify(nowList))
    setList(nowList)
}
// 删除一个本地导航
function deleteItem(pre, next, setList) {
    let list = localStorage.getItem('navList') || '[]';
    list = JSON.parse(list)
    if (list[pre].list.length === 1) {
        list.splice(pre, 1)
    } else {
        list[pre].list.splice(next, 1)
    }
    localStorage.setItem('navList', JSON.stringify(list))
    setList(list)
}
// 切换线上和本地导航
function changeNavList(setList) {
    isLocal = !isLocal;
    if (isLocal) {
        let list = localStorage.getItem('navList') || '[]';
        list = JSON.parse(list)
        setList(list)
    } else {
        setList(navList)
    }
}


// ---------------------------------------------
// 导航列表内容
function NavContent({ navList, isLocal, deleteItem, setList }) {
    return (<>
        {navList.map((item, index) => {
            return (
                <div key={item.title} name={item.title} id={item.title}>
                    <BaseTitle name={item.title} />
                    <NavTagGroup list={item.list} isLocal={isLocal} deleteItem={(index_2) => deleteItem(index, index_2, setList)}></NavTagGroup>
                </div>
            )
        })}
    </>)
}
// 导航每组
function NavTagGroup({ list, isLocal, deleteItem }) {
    return (
        <div className='nav-tag-box'>
            {list.map((item, index) => {
                return (
                    <div
                        className='nav-tag-item'
                        key={item.name}
                        style={{
                            marginRight: isLocal ? '40px' : '20px',
                            borderTopRightRadius: isLocal ? '0px' : '4px',
                            borderBottomRightRadius: isLocal ? '0px' : '4px'
                        }}
                    >
                        <div onClick={() => { window.open(item.url) }}>{item.name}</div>
                        {isLocal && <div className='nav-tag-item-delete-btn' onClick={() => deleteItem(index)}>x</div>}
                    </div>
                )
            })}
        </div>
    )
}
// 切换本地按钮
function NavLocalIcon({ changeNavList, setList }) {
    const path = 'M448 832v64l-128.32-128L448 640v64h192a192 192 0 0 0 115.84-345.152l0.704-0.896 90.24-90.24A320 320 0 0 1 640 832l-192.064 0.064zM576 192V128l131.008 128L576 384V320H384a192 192 0 0 0-115.712 345.216l-91.072 91.008A320 320 0 0 1 384 192h192.064z'
    return (
        <div className='nav-local-box' onClick={() => changeNavList(setList)}>
            <svg viewBox="0 0 1024 1024">
                <path d={path} fill="aqua"></path>
            </svg>
        </div>
    )
}

// 格式导航数据
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
const navList = [
    {
        title: '仓库、部署',
        list: [
            { name: 'Github', url: 'https://github.com/' },
            { name: 'Gitee', url: 'https://gitee.com/' },
            { name: 'Netlify', url: 'https://app.netlify.com/' },
            { name: 'Vercel', url: 'https://vercel.com/' },
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
            { name: 'Antd of Vue', url: 'https://www.antdv.com/' },
            { name: 'Antd of React', url: 'https://3x.ant.design/docs/react/introduce-cn' },
            { name: 'Element-plus', url: 'https://element-plus.org/' },
            { name: 'Hexo markdown', url: 'https://hexo.io/zh-cn/' },
            { name: 'vitePress', url: 'http://www.fenovice.com/doc/vuepress-next/guide/' },
        ]
    },
    {
        title: 'anime、CSS技巧',
        list: [
            { name: 'AnimeJs 动画库', url: 'https://animejs.com/', },
            { name: '0代码生成布局', url: 'https://www.lingdaima.com/' },
            { name: 'Loading 动画', url: 'https://tobiasahlin.com/spinkit/', },
            { name: 'Css 灵感创意', url: 'https://csscoco.com/inspiration/#/./init' },
            { name: 'Css 渐变', url: 'https://color.oulu.me/' },
            { name: 'Codemyui 动画实例', url: 'https://codemyui.com/' },
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
            { name: 'nodeJs 指南', url: 'https://blog.poetries.top/node-learning-notes/' },
        ]
    },
    {
        title: '工具类型',
        list: [
            { name: '在线工具', url: 'https://tool.lu/' },
            { name: '短链接生成', url: 'https://reurl.cc/main/cn' },
            { name: '代码转图片', url: 'https://carbon.now.sh/' },
        ]
    },
    {
        title: 'Icon',
        list: [
            { name: 'iconfont 阿里', url: 'https://www.iconfont.cn/' },
            { name: 'iconify', url: 'https://icon-sets.iconify.design/' },
        ]
    },
    {
        title: '面试题',
        list: [
            { name: '前端面试', url: 'https://blog.poetries.top/FE-Interview-Questions/' },
        ]
    },
    {
        title: '开发工具下载',
        list: [
            { name: 'vsCode', url: 'https://code.visualstudio.com/' },
            { name: 'WebStorm', url: 'https://www.jetbrains.com/webstorm/' },
        ]
    },
]
