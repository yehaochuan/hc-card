import jsSvg from '/@/assets/js.svg'
import cssSvg from '/@/assets/css.svg'
import waveSvg from '/@/assets/wave.svg'
import loadingSvg from '/@/assets/loading.svg'
import borderSvg from '/@/assets/border.svg'
import githubSvg from '/@/assets/github.svg'
import giteeSvg from '/@/assets/gitee.svg'
import nelitfySvg from '/@/assets/nelitfy.svg'
import animeSvg from '/@/assets/anime.svg'
import xyzSvg from '/@/assets/xyz.svg'
import codeuiSvg from '/@/assets/codeui.svg'
import fontSvg from '/@/assets/font.svg'



export const barList = [
    {
        name: 'JS',
        children: [
            {
                name: '学习类',
                type: 'title'
            },
            {
                name: '近代js教程',
                Icon: jsSvg,
                intro: '近代js教程',
                url: 'https://zh.javascript.info/'
            },
            {
                name: 'ES6',
                intro: 'ES6',
                type: 'text',
                url: 'https://es6.ruanyifeng.com/'
            },
        ]
    },
    {
        name: 'CSS',
        children: [
            {
                name: '学习类',
                type: 'title'
            },
            {
                name: 'Css Tricks',
                Icon: cssSvg,
                intro: 'CSS技巧大全',
                url: 'https://lhammer.cn/You-need-to-know-css/#/zh-cn/'
            },
            {
                name: '生成类',
                type: 'title'
            },
            {
                name: '半径工具',
                Icon: borderSvg,
                intro: '通过拖拽的形式生成需要的border-radius',
                url: 'https://9elements.github.io/fancy-border-radius/'
            },
            {
                name: '加载动画',
                Icon: loadingSvg,
                intro: '加载动画下载为SVG、GIF、PNG...',
                url: 'https://loading.io/'
            },
            {
                name: '波浪',
                Icon: waveSvg,
                intro: '自定义生成简单的波纹',
                url: 'https://getwaves.io/'
            },
            {
                name: '阴影生成',
                type: 'text',
                intro: '阴影生成器',
                url: 'https://neumorphism.io/#e0e0e0'
            },
            {
                name: '0代码',
                type: 'text',
                intro: '偷懒必备',
                url: 'https://www.lingdaima.com/'
            },
        ]
    },
    { name: '框架' },
    {
        name: '动画',
        children: [
            {
                name: '常用动画库',
                type: 'title'
            },
            {
                name: 'animeJs',
                Icon: animeSvg,
                intro: '超级轻量级，动画库！',
                url: 'https://animejs.com/'
            },
            {
                name: ' XYZ',
                Icon: xyzSvg,
                intro: '自定义和组合复杂的动画！',
                url: 'https://animxyz.com/'
            },
            {
                name: 'codemyui',
                Icon: codeuiSvg,
                intro: '各种动画实例',
                url: 'https://codemyui.com/'
            },
        ]
    },
    {
        name: '图标',
        children: [
            {
                name: '常用图标库',
                type: 'title'
            },
            {
                name: 'iconfont',
                Icon: fontSvg,
                intro: '阿里字体图标库！',
                url: 'https://animejs.com/'
            },
            {
                name: 'iconify',
                type: 'text',
                intro: 'iconify.design ！',
                url: 'https://icon-sets.iconify.design/'
            },
        ]
    },
    { name: '工具' },
    {
        name: '仓库',
        children: [
            {
                name: '代码仓库',
                type: 'title'
            },
            {
                Icon: githubSvg,
                type: 'icon',
                intro: 'github -> 全球代码仓库',
                url: 'https://github.com/'
            },
            {
                Icon: giteeSvg,
                type: 'icon',
                intro: 'gitee -> 国内代码仓库',
                url: 'https://gitee.com/'
            },
        ]

    },
    {
        name: '部署',
        children: [
            {
                name: '部署工具',
                type: 'title'
            },
            {
                Icon: nelitfySvg,
                name: 'netlify',
                intro: 'netlify -> 自动化免费部署',
                url: 'https://app.netlify.com/'
            },
        ]
    },
    {
        name: '社区',
        children: [
            {
                name: '常用图标库',
                type: 'title'
            },
            {
                name: '掘金',
                type: 'text',
                intro: '掘金',
                url: '/'
            },
            {
                name: 'CSDN',
                type: 'text',
                intro: '掘金',
                url: '/'
            },
            {
                name: '腾讯云',
                type: 'text',
                intro: '掘金',
                url: '/'
            },
            {
                name: '阿里云',
                type: 'text',
                intro: '掘金',
                url: '/'
            },
        ]
    },
    { name: '笔记' },
    { name: '算法' },
    { name: '测试' },
]

