<template>
  <div class="float-btns">
    <ul>
      <li>
        <el-backtop visibility-height="0" right="0" bottom="0"></el-backtop>
      </li>
      <li>
        <el-color-picker size="mini" v-model="color"></el-color-picker>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'FloatBtns',
  data(){
    return{
      color: '#409EFF',
    }
  }
}
</script>
<style lang="scss">
.float-btns{
  position: fixed;
  z-index: 100;
  right: 0px;
  bottom: 200px;
  div{
    background: #34495e;
    border-radius: 5px;
  }
  ul{
    background: #34495e;
    border-radius: 5px;
    li{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 50px;
      .el-backtop{
        width: 60px;
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