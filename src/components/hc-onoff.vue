<template>
  <div class="onoff_box">
    <div class="btn" @click="btnClick"></div>
  </div>
</template>

<script setup>
import anime from "animejs";

const btnType = ref("on");
const emit = defineEmits(["typeChange"]);

function btnClick() {
  if (btnType.value === "off") {
    anime({
      targets: ".btn",
      translateX: 0,
    });
    emit("typeChange", "on");
    btnType.value = 'on'
  } else {
    anime({
      targets: ".btn",
      translateX: 45,
      background: "#d1fdff",
    });
    emit("typeChange", "off");
    btnType.value = 'off'
  }
}
</script>
<style lang="less" scoped>
.onoff_box {
  width: 80px;
  height: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: inset 1px 1px 10px 2px rgba(0, 0, 0, 0.8);
  display: inline-block;
  align-items: center;
  padding: 0 5px;
  box-sizing: border-box;
  > .btn {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    border-radius: 100%;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
}
</style>