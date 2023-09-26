const str_1 = `
[Ⅰ、开源漏洞登记系统]
时间：2021.06 - 2022.07
技术栈：vue2、vue-router、vuex、echarts、apd-ui 等
介 绍：
华为自研供内部使用，一方面接收上游下来的漏洞，另一方面可以通过手动登记漏洞，
针对开源漏洞和自研漏洞，提供了两套流程，根据漏洞的各种属性、和打分，来判断漏洞的强弱，然后针对这些
走不同的派发责任人，是一种流程类型系统。 工作内容：
1、组织 项目从底代码平台（灵雀）=> 到vue的重构；
2、将系统升级到 vue2.7 过渡态并解决冲突，等部门 UI 组件库支持 vue3 直接升级；
3、参与新需求的评审和开发，和对项目做一些相关的优化；
4、优化项目，为产品后期运营提供升级、维护等技术支持；

[Ⅱ、华为可信看板系统]
时间：2022.07 - 至今
技术栈：vue3、vue-router、pinia、echarts、apd-ui 等
介 绍:
本系统是针对（华为、od、外包）员工的可信考试、绩效、KPI、编码、构建等，多种数据的一种看板系统，
系统的数据都是对接各种部门的上游数据，以各种图表、卡片展示，系统基本上只存在查询和筛选，一种大数据
可视化类型的系统；
工作内容：
1、参与需求评审，参与前端需求开发；
2、参与少量需求开发，升级系统框架到 vue3，编写前端项目文档；
3、参加前端自动化测试小组，通过 palywright 用例的编写；
`

function updateHtmlStr(str) {
    let newStr = str.replace(/\[[\s\S]{0,20}\]/g, res => '<div class="title-start">' + res.slice(1, res.length - 1) + '</div>')
    newStr = newStr.replace(/\n[1-9](、)/g, res => '<span class="light-text">' + res + '</span>')
    newStr = newStr.replace(/\n/g, res => res + '<br/>')
     

    console.log(newStr)
    return newStr
}


export default [
    {
        name: '第一次工作经历',
        time: '2021.6~至今',
        long: '2.5年',
        content: '华为od(外企德科)',
        details: [
            {
                name: '软件开发工程师         华为（OD 岗 外企德科)         2022.4 - 至今',
                content: updateHtmlStr(str_1),
            }
        ]
    },
    {
        name: '实习经历',
        time: '2020.6~2021.6',
        long: '1年',
        content: '百里半网络技术有限公司',
        details: [
            {
                name: '前端开发工程师          百里半网络技术有限公司          2020.6~2021.6',
                content: '',
            }
        ]
    },
    {
        name: '教育经历',
        time: '2017.6~2021.6',
        long: '4年',
        content: '本科 软件工程',
        details: [
            {
                name: '武昌工学院    本科     软件工程     人工智能学院      2017.6 - 2021.6',
                content: '....'
            }
        ]
    }
]
