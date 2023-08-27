import React from 'react'
import './index.css'
import BaseCard from '../../components/baseCard'
import BaseTitle from '../../components/baseTitle'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    const navigate = useNavigate()
    return (
        <BaseCard navList={[{ title: '博客' }]}>
            <BaseTitle name={'博客'}></BaseTitle>
            <div className='b-card-body'>
                {
                    cardList.map(item => {

                        return (
                            <div className='b-card-item' key={item.title} onClick={() => open(item, navigate)}>
                                <p>{item.title}</p>
                                <div>文章数</div>
                                <div>{item.num}</div>
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
const cardList = [
    { title: 'CSDN', num: '52', url: 'https://haochuan.blog.csdn.net' },
    { title: '个人网站', num: '0', path: '/notArticle' }
]