<template>
  <div class="body-content">
    <div class="left-box">
      <hc-header />
    </div>

    <div class="right-box">
      <div class="card-title-item">1</div>
      <div class="card-title-item">2</div>
      <div v-for="(item, index) in phoneCardList" class="card-item" @click="handerClick(item)">
        <div class="card-icon">
          <slot :name="index"></slot>
        </div>
        <div class="card-text">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { phoneCardList } from "../config/index";
const emit = defineEmits(['handerClick']);
function handerClick(item) {
  if (item.path) {
    emit('handerClick', item.path)
  }
}

</script>

<style lang="less" scoped>
.body-content {
  display: flex;
  margin: 0 auto;
  width: 60rem;

  .left-box {
    flex: 1;
    padding-top: 1rem;
  }

  .right-box {
    flex: 2;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .card-title-item {
      width: calc(50% - 1rem);
      background: rgba(0, 0, 0, 0.3);
      height: 9rem;
      margin-bottom: 5rem;
      border-radius: 1rem;
      padding: 1rem;
      box-sizing: border-box;

      &:first-of-type {
        margin-right: 1rem;
      }
    }

    .card-item {
      width: 30%;
      height: 6rem;
      padding: 5px;
      box-sizing: border-box;
      border: 3px solid #0366d64d;
      margin: 1rem 0;
      text-align: center;
      transition: box-shadow 0.5s;
      cursor: pointer;

      .card-icon {
        width: 100%;
      }

      .card-text {
        text-align: center;
      }
    }

    .card-item:hover {
      box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
    }
  }

}</style>