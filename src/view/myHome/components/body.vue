<template>
  <main>
    <div
      v-for="(item, index) in cardList"
      :key="item.title"
      :class="item.name"
      @click="clickCard(index + 1)"
    >
      <div>{{ item.title }}</div>

      <div class="open">open</div>
    </div>
  </main>
</template>

<script setup>
import anime from "animejs";
import { cardList } from "../configs/index";

onMounted(() => {
  anime({
    targets: ".card2",
    translateX: "-350px",
    translateZ: "-100px",
    rotateY: 10,
  });
  anime({
    targets: ".card3",
    translateX: "350px",
    translateZ: "-100px",
    rotateY: -10,
  });
});

function clickCard(type) {
  anime({
    targets: ".card" + type,
    translateX: 0,
    translateZ: 0,
    rotateY: 0,
  });

  let arr = [1, 2, 3].filter((res) => res !== type);

  anime({
    targets: ".card" + arr[0],
    translateX: 350,
    translateZ: "-100px",
    rotateY: -10,
  });
  anime({
    targets: ".card" + arr[1],
    translateX: -350,
    translateZ: "-100px",
    rotateY: 10,
  });
}
</script>

<style lang="less" scoped>
main {
  position: relative;
  top: 100px;
  margin: 0 auto;
  height: 500px;
  width: 300px;
  transform-style: preserve-3d;
  perspective: 800px;
  perspective-origin: center center;
  > div {
    > div:first-of-type {
      color: white;
      font-size: 24px;
      text-align: center;
      padding-top: 10px;
      font-weight: 800;
      -webkit-text-stroke: 0.5px orange;
      text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
    }
  }
}

[class^="card"] {
  width: 300px;
  height: 500px;
  position: absolute;
  box-shadow: 0px 0px 12px 2px rgba(59, 62, 65, 0.8),
    inset 10px 10px 10px 1px 1px rgb(0, 222, 252);
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  > div {
    width: 100%;
    box-sizing: border-box;
  }
  .open {
    height: 60px;
    line-height: 60px;
    margin-top: auto;
    text-align: center;
    color: white;
    cursor: pointer;
    letter-spacing: 4px;
    font-size: 20px;
    font-weight: 600;
  }
  .open:hover {
    background: rgba(88, 199, 233, 0.6);
  }
}
</style>