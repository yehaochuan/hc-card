import React, { useEffect, useState } from 'react'
import './index.css'
import BaseCard from '../../components/baseCard'
import BaseTitle from '../../components/baseTitle'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Index() {
    const navigate = useNavigate()
    const loc = useLocation()
    const name = loc.pathname.split('/')[1]
    const [list, setList] = useState([])
    useEffect(() => {
        setList(navObj[name].list)
    },[name])

     
    return (
        <BaseCard>
            <BaseTitle name={navObj[name].name}></BaseTitle>
            <div className='b-card-body'>
                {
                    list.map(item => {

                        return (
                            <div className='b-card-item' key={item.title} onClick={() => open(item, navigate)}>
                                <p>{item.title}</p>
                                <div>{item.label}</div>
                                <div>{item.val}</div>
                            </div>
                        )
                    })
                }
            </div>

        </BaseCard>
    )
}
function open({ path, url }, navigate) {
    path && navigate(path);
    url && window.open(url);
}
const navObj = {
    Experience: {
        name: '博客',
        list: [
            {
                title: 'CSDN',
                label: '文章数',
                val: '52',
                url: 'https://haochuan.blog.csdn.net'
            },
            {
                title: '个人网站',
                label: '文章数',
                val: '0',
                path: '/notArticle'
            }
        ]
    },
    OpenSoure: {
        name: '开源项目',
        list: [
            {
                title: 'YHC-UI',
                label: '基于VUE3',
                val: '个人UI框架',
                url: 'https://haochuan-ui.netlify.app/'
            },
        ]
    }
}



