<template>
  <header>
    <div class="logo"><img src="/@/../public/logo.png" alt="card" /> Card</div>
    <div>
      <hc-onoff @typeChange="typeChange" class="onoff"></hc-onoff>
    </div>
  </header>
</template>

<script setup>
const emits = defineEmits(["update:bgColor"]);
function typeChange(type) {
  if (type == "on") {
    emits("update:bgColor", "bg1");
  } else {
    emits("update:bgColor", "bg2");
  }
}
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 4rem;
  display: flex;
  color: orange;
  align-items: center;
  font-size: 1.5rem;
  text-shadow: 15px -12px 2px rgb(175, 143, 250);
  font-weight: 700;
  position: relative;
  .logo{
    position: absolute;
    top: 1rem;
    left: 2rem;
  }
  img {
    width: 5rem;
    height: 5rem;
    margin-left: 1rem;
    transform: rotateX(30deg) rotateZ(8deg);
    vertical-align: -1rem;
  }
  > div:last-of-type {
    margin: 0 1rem 0 auto;
  }
}
</style>