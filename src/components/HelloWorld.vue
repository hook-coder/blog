<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="title">我是标题</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  background: blue;
}
  .title{
    font-size: 22px;
  }
</style>
