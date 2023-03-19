import jsSvg from '/@/assets/js.svg'
import cssSvg from '/@/assets/css.svg'

export const barList = [
    {
        name: 'JS',
        children: [
            { name: '近代js教程', Icon: jsSvg, intro: '近代js教程', url: 'https://zh.javascript.info/' },
            { name: 'ES6', intro: 'ES6', type: 'text', url: 'https://es6.ruanyifeng.com/' },
        ]
    },
    {
        name: 'CSS',
        children: [
            {
                name: 'Css Tricks',
                Icon: cssSvg,
                intro: '汇集了大量的CSS动画效果',
                url: 'https://lhammer.cn/You-need-to-know-css/#/zh-cn/'
            },
        ]
    },
    { name: '框架' },
    { name: '动画' },
    { name: '工具' },
]

