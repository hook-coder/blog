<template>
  <div class="home">
    <div class="content">
      <Aside></Aside>
      <Main></Main>
    </div>
  </div>
</template>
<script>
import Aside from '@/components/Aside.vue'
import Main from '@/components/Main.vue'

export default {
  name:'home',
  components:{
    Aside,
    Main
  }  
}
</script>
<style lang="">
  
</style>