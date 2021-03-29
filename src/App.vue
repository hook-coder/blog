<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
    <FloatBtns/>
    <Bg/>
  </div>
</template>

<script>
import Bg from './components/Bg.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import FloatBtns from './components/FloatBtns.vue';

export default {
  name: 'App',
  components: {
    Bg,Header,Footer,FloatBtns
  }
}
</script>

<style lang="scss">
$mianColor: #1a9dff;
*{
  padding: 0;
  margin: 0;
}
ul li{
  list-style-type: none;
}
a{
  text-decoration: none;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
  margin-top: 95px;
  display: flex;
  justify-content: center;
}
.common {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px #ccc;
  margin-bottom: 20px;
  .title {
    padding: 2px;
    display: flex;
    flex-direction: column;
    border-left: 8px solid $mianColor;
    border-bottom: 1px solid #ebf6ff;
    border-radius: 15px 0 0 30px;
    padding-left: 15px;
    font-size: 17px;
    font-weight: bold;
    .english-title {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      color: #adddff;
    }
  }
  .common-content {
    padding: 23px 0 5px;
  }
}
</style>
