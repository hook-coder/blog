<template>
  <div class="bg">
    <ul class="bg-bubbles">
      <li v-for="i in 10" :key="i"></li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Bg',
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
$mianColr: #cce9ff;
.bg-bubbles {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  li {
    position: absolute;
    bottom: -160px;
    width: 40px;
    height: 40px;
    list-style: none;
    border-radius: 50%;
    animation: square 15s infinite;
    transition-timing-function: ease-out;
    background: linear-gradient(to bottom right, #e0f2ff, $mianColr);
    &:nth-child(1) {
      left: 10%;
    }
    &:nth-child(2) {
      left: 20%;
      width: 90px;
      height: 90px;
      animation-delay: 2s;
      animation-duration: 20s;
    }
    &:nth-child(3) {
      left: 25%;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      animation-duration: 14s;
    }
    &:nth-child(5) {
      left: 70%;
    }
    &:nth-child(6) {
      left: 80%;
      width: 80px;
      height: 80px;
      animation-delay: 3s;
    }
    &:nth-child(7) {
      left: 32%;
      width: 30px;
      height: 30px;
      animation-delay: 2s;
    }
    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      animation-delay: 4s;
      animation-duration: 13s;
    }
    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;
      animation-delay: 2s;
      animation-duration: 18s;
    }
    &:nth-child(10) {
      left: 85%;
      width: 110px;
      height: 110px;
      animation-delay: 5s;
    }
  }
  // 自定义 square 动画；
  @keyframes square {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0.4;
      transform: translateY(-1000px);
    }
  }
}
</style>