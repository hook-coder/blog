<template>
  <div class="content">
    <Aside></Aside>
    <main class="common">
      <div class="markdown-body" v-if="true">
        <RM />
      </div>
      <div v-else>加载中...</div>
    </main>
  </div>
</template>
<script lang="ts">
import RM from '../views/README.md';
import Aside from '@/components/Aside.vue'
export default {
  name: 'Dtails',
  components: {
    RM,
    Aside,
  }
}
</script>

<style lang="scss" scoped>
main {
  margin-left: 20px;
  width: 790px;
}
.markdown-body {
  width: 100%;
  * {
    text-align: left;
  }
}
</style>