<template>
  <main>
    <pre v-highlight>
      <code class="javaScript">
        let a = b; 
        let b = 3;
        let c = 1;
        let b = 1;
        function abc(){
          console.log('abc')
        }
        class Dog{
          
        }
      </code>
    </pre>
    <pre v-highlight>
      <code class="css">
        .hljs-langName{
          position: absolute;
          pointer-events: none;
          top: 10px;
          right: 40px;
          font-size: 100%;
          width: 40px;
          text-align: center;
          letter-spacing: -1px;
          border-right: 1px solid rgba(0, 0, 0, 0.66);
          font-size: 15px;
        }
      </code>
    </pre>
  </main>
</template>

<script lang="ts" setup>
// import { Search, Bell, SuccessFilled } from '@element-plus/icons-vue'
// import { ref } from 'vue';
// let activeIndex = ref('/').value;
// let mainColor = ref('#1a9dff').value//激活标签颜色
</script>

<style lang="scss">
main {
  margin-left: 20px;
  width: 790px;
}
</style>