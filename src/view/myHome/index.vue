<template>
  <div :class="'home-box ' + bgColor">
    <HeaderPhone v-model:bgColor="bgColor" class="phone" />

    <div class="content-box flex-box">
      <MainPhone class="pc-body" @handerClick="handerClick">
        <template #0><i-ant-design-user-outlined /></template>
        <template #1><i-ant-design-copyright-circle-outlined /> </template>
        <template #2><i-ant-design-file-done-outlined /> </template>
        <template #3><i-ant-design-read-outlined /> </template>
        <template #4><i-ant-design-profile-outlined /> </template>
        <template #5><i-ant-design-rocket-twotone /> </template>
      </MainPhone>
    </div>

  </div>
</template>

<script  setup>
import HeaderPhone from "./components/headerPhone.vue";
import MainPhone from "./components/bodyPhone.vue";
import { useRouter } from 'vue-router'
const router = useRouter()
function handerClick(path) {
  router.push(path);
}


// 背景
const bgColor = ref("bg1");
</script>
<style lang='less' scoped>
.home-box {
  height: 100%;

  .content-box {
    height: calc(100% - 4rem);
  }
}

svg {
  width: 2rem;
  height: 2rem;
  margin: 0.4rem 0;
  color: rgb(9, 135, 39);
}
</style>

