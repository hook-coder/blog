<template>
  <div class="content">
    <!-- <Aside></Aside> -->
    <div class="archive common">
      <span class="title">
        <span>归档</span>
        <span class="english-title">—ARCHIVE</span>
      </span>
      <div class="archive-content common-content">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top" type="danger" v-for="(item,index) in 8" :key="index">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import Aside from '@/components/Aside.vue'
export default {
  name: "Archive",
  data() {
    return {
    };
  },
  components: {
    // Aside,
  },
};
</script>
<style lang="scss" scoped>
.archive {
  width: 750px;
  height: 100%;
  margin-left: 20px;
}
.archive-content{
  width: 100%;
  display: flex;
  justify-content: center;
}
.common{
  background: none;
}
</style>