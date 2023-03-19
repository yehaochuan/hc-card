<template>
  <div class="photo">
    <div class="myphoto">
      <div class="rotatebox"></div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.photo {
  width: 9rem;
  height: 9rem;
  box-sizing: content-box;
  margin: 0 auto;
  border: 3px solid rgb(180, 226, 253);
  border-radius: 50%;
  box-shadow: inset 0px -4px 10px 2px rgb(23, 220, 235),
    1px 1px 10px 0.5px #9485fc;
  .myphoto {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    color: wheat;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    border: 3px solid rgb(129, 127, 127);
    box-sizing: border-box;
    margin: 1rem auto;
    box-shadow: -3px -3px 1rem 1px rgba(20, 210, 243, 0.5);
    background-image: url(/@/../public/hc.jpg);
    background-size: cover;
    position: relative;
    .rotatebox {
      width: 8rem;
      height: 8rem;
      border-top-right-radius: 65% 56%;
      border-top-left-radius: 46% 66%;
      border-bottom-right-radius: 23% 41%;
      border-bottom-left-radius: 53% 27%;
      background-color: rgba(193, 39, 224, 0.9);
      position: absolute;
      top: 3.8rem;
      left: 0.5rem;
      opacity: 0.5;
      transform: rotate(0deg);
      animation: xuanzhuan 2s linear infinite;
    }

    @keyframes xuanzhuan {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>