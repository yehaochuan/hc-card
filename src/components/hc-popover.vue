<template>
  <div class="popoverBox" @click="open">
    <slot></slot>
    <div class="content" v-if="visbilte">
      <div class="arrow"></div>
      <div class="mainbox" @click="visbilte = false">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
let { left } = defineProps({ left: { type: String, default: "0" } });
let visbilte = ref(false);
function open() {
  visbilte.value = !visbilte.value;
}
</script>
<style lang='less' scoped>
.popoverBox {
  position: relative;
  display: inline-block;
  width: 100%;
  .btnBox {
    display: inline-block;
  }
  .content {
    position: absolute;
    z-index: 100;
    top: 100%;
    transform: translateX(-50%);
    left: 50%;
    .arrow {
      border: 8px solid;
      border-color: transparent transparent #1488f5 transparent;
      height: 0;
      width: 0;
      margin: 0 auto;
    }
    .mainbox {
      background: #fff;
      box-shadow: 3px 8px 1rem 1px rgba(0, 0, 0, 0.4);
      border-radius: 0.3rem;
      border: 2px solid #1488f5;
      padding: 0  !important;
      cursor: pointer;
      position: relative;
      left: v-bind(left);
    }
  }
}
</style>