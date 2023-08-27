import React from 'react'
import BaseCard from '../../components/baseCard'
export default function notArticle() {
  return (
    <BaseCard>
      <div>文章以暂时转移 CSDN</div>
      <div>
        <a
          href="https://haochuan.blog.csdn.net"
          style={{ color: '#d0a646', marginTop: '10px' }}
        >
          点击跳转
        </a>
      </div>
    </BaseCard>
  )
}
