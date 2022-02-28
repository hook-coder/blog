<template>
  <div class="float-btns">
    <ul>
      <li>
        <el-backtop visibility-height="500"  right="0" bottom="0"></el-backtop>
      </li>
      <!-- <li>
        <el-color-picker size="mini" v-model="color"></el-color-picker>
      </li> -->
    </ul>
  </div>
</template>
<script lang="ts" setup>
// import { ref } from 'vue'
// let color = ref('#409EFF').value
</script>
<style lang="scss">
.float-btns{
  position: fixed;
  z-index: 100;
  right: 60px;
  bottom: 100px;
  div{
    background: #34495e;
    border-radius: 5px;
  }
  ul{
    // background: #34495e;
    // border-radius: 5px;
    .el-backtop{
      border-radius: 25px;
      background: #F67979 !important;
    }
    li{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      .el-backtop{
        width: 50px;
        height: 50px;
        position: absolute; 
        top: 0;
        background: none;
        i{
          color: white;
        }
      }
    }
  }
}
</style>