<template>
    <div class="my-nav-box">
        <!-- 类型导航 -->
        <div class="nav-type-box">
            <div v-for="item in barList" :key="item.name" class="bar-item" @click="checkTypeNav(item)">
                {{ item.name }}
            </div>
        </div>
        <!-- 导航类表 -->
        <div class="nav-content-box">
            <template v-for="item in checkedItem.children">
                <div class="nav-item" @click="navClick(item)" v-if="item.type !== 'title'">
                    <div v-if="item.type === 'text'" class="text-nav">
                        {{ item.name }}
                    </div>
                    <div v-else-if="item.type === 'icon'" class="icon-nav">
                        <img :src="item.Icon" alt="">
                    </div>
                    <div v-else>
                        <img :src="item.Icon" alt="">
                        <div>{{ item.name }}</div>
                    </div>
                    <div class="intro-box">
                        {{ item.intro }}
                        <div class="arrow"></div>
                    </div>
                </div>
                <div v-else class="nav-title">
                    <span> {{ item.name }}</span>
                </div>
            </template>
        </div>
        <div class="goHome">
            >
        </div>
    </div>
</template>
<script setup>
import { barList } from './config'
import { ref } from 'vue';

const checkedItem = ref(barList[0])

function checkTypeNav(item) {
    checkedItem.value = item
}
function navClick(item) {
    window.open(item.url)
}

</script>
<style lang="less">
.my-nav-box {
    height: 100%;
    display: flex;
    background: rgb(187, 246, 8);

    .nav-type-box {
        width: 5rem;
        background: rgba(0, 0, 0, 0.8);
        padding: 0.5rem;
        box-sizing: border-box;
        overflow-y: auto;

        .bar-item {
            width: 4rem;
            height: 4rem;
            background-color: rgb(236, 244, 190);
            border-radius: 5px;
            text-align: center;
            line-height: 4rem;
            margin-bottom: 1rem;
            font-weight: bold;
            color: coral;
            box-sizing: border-box;
            border: 2px solid rgb(0, 170, 255);
        }

        .bar-item:hover {
            box-shadow: inset 0px 0px 10px 1px aqua;
            cursor: pointer;
        }
    }
    .nav-content-box {
        flex: 1;
        border: 6px solid rgba(0, 0, 0, 0.8);
        box-sizing: border-box;
        padding: 1rem;
        box-shadow: inset 0px 0px 6px 2px rgba(0, 0, 0, 0.8);
        overflow: auto;
        .nav-title {
            border-left: 6px solid rgb(10, 142, 249);
            height: 2rem;
            line-height: 2rem;
            width: 100%;
            font-weight: bold;
            font-size: 1rem;
            margin: 1rem 0;
            clear: both;
           
            >span {
                display: inline-block; 
                box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
                padding-left: 1rem;
                width: 22rem;
                background: #c4f3fa;
                border-top-right-radius:1.5rem;
                border-bottom-right-radius:1.5rem;
                color: rgb(46, 46, 50);
            }
        }

        .nav-item {
            width: 6rem;
            height: 6rem;
            text-align: center;
            border: 2px solid rgb(17, 160, 236);
            margin-right: 1rem;
            border-radius: 6px;
            box-sizing: border-box;
            padding: 0.2rem 0;
            background-color: #ecf4be;
            transition: all 0.5s;
            cursor: pointer;
            position: relative;
            float: left;
            margin-bottom: 1rem;
            color: #444;
            .text-nav {
                height: 100%;
                text-align: center;
                line-height: 5.6rem;
                font-weight: bold;
                font-size: 1.2rem;
                color: #666;
            }
            .icon-nav{
                padding-top: 1rem;
            }
            img {
                width: 3rem;
                height: 3rem;
                margin: 0.3rem 0;
            }

            .intro-box {
                display: none;
                width: 10rem;
                position: absolute;
                top: 7rem;
                left: 0px;
                text-align: left;
                border: 2px solid salmon;
                background: #fff;
                border-radius: 4px;
                padding: 4px;

                >.arrow {
                    border: 8px solid transparent;
                    border-bottom: 8px solid salmon;
                    width: 0;
                    position: absolute;
                    top: -18px;
                    left: 10px;
                }
            }

            &:hover {
                .intro-box {
                    display: block;

                }
            }
        }
        .nav-item:hover {
            box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.4);
        }

    }
    .goHome{
       width: 3rem;
       height: 3rem;
       text-align: center;
       line-height: 3rem;
       color: white;
       font-weight: bold;
       cursor: pointer;
       box-shadow: 1px 1px 4px 0.5px rgba(0,0,0,0.8);
       border: 2px solid skyblue;
       border-radius: 50%;
       background-color: chocolate;
       position: fixed;
       bottom: 3rem;
       right: 3rem; 
    }
}</style>